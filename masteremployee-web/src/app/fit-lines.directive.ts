import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  inject,
} from '@angular/core';

/**
 * Justifies a stacked headline: every `.title-line` child is scaled so all
 * lines render at the same width, which means short lines get a larger font
 * size than long ones.
 *
 * Each line is measured at a fixed reference size using a Range, so the
 * measurement reflects the text itself rather than the block it sits in.
 * Measure and apply happen synchronously in one frame — the browser resolves
 * the forced reflow without painting the reference size.
 */
@Directive({
  selector: '[meFitLines]',
  standalone: true,
})
export class FitLinesDirective implements AfterViewInit, OnChanges, OnDestroy {
  private static readonly REF_PX = 100;

  /**
   * Fraction of the available width the lines are fitted to. 1 fills the
   * column; 0.7 renders the same justified stack 30% smaller.
   */
  @Input('meFitLines') ratio: number | string = 1;

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly zone = inject(NgZone);

  private resizeObserver?: ResizeObserver;
  private mutationObserver?: MutationObserver;
  private frame = 0;
  private lastWidth = -1;

  ngAfterViewInit() {
    if (typeof window === 'undefined') return;

    // Layout-only work: keep it out of change detection.
    this.zone.runOutsideAngular(() => {
      this.fit();

      // Width changes only — our own font-size writes change height, and
      // reacting to those would loop.
      this.resizeObserver = new ResizeObserver(() => {
        const width = this.host.nativeElement.clientWidth;
        if (width === this.lastWidth) return;
        this.schedule();
      });
      this.resizeObserver.observe(this.host.nativeElement);

      // Language switch swaps the line nodes. Attributes are deliberately not
      // observed, so writing font-size back does not re-trigger this.
      this.mutationObserver = new MutationObserver(() => this.schedule());
      this.mutationObserver.observe(this.host.nativeElement, {
        childList: true,
        subtree: true,
        characterData: true,
      });

      // Webfonts load with display=swap, so the first measurement is against
      // the fallback face and has to be redone.
      document.fonts?.ready.then(() => this.schedule());
    });
  }

  ngOnChanges() {
    if (this.resizeObserver) this.schedule();
  }

  ngOnDestroy() {
    this.resizeObserver?.disconnect();
    this.mutationObserver?.disconnect();
    if (this.frame) cancelAnimationFrame(this.frame);
  }

  private schedule() {
    if (this.frame) cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => {
      this.frame = 0;
      this.fit();
    });
  }

  private fit() {
    const el = this.host.nativeElement;
    const lines = Array.from(el.querySelectorAll<HTMLElement>('.title-line'));
    if (lines.length === 0) return;

    const width = el.clientWidth;
    if (width <= 0) return;
    this.lastWidth = width;

    const target = width * (Number(this.ratio) || 1);

    const ref = FitLinesDirective.REF_PX;
    for (const line of lines) line.style.fontSize = `${ref}px`;

    const range = document.createRange();
    const widths = lines.map((line) => {
      range.selectNodeContents(line);
      return range.getBoundingClientRect().width;
    });

    lines.forEach((line, i) => {
      const natural = widths[i];
      // Fall back to the stylesheet's clamp if a line measures empty.
      line.style.fontSize = natural > 0 ? `${(ref * target) / natural}px` : '';
    });
  }
}
