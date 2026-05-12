import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[meReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  /** Delay in ms before the reveal animation begins (used for stagger). */
  @Input('meReveal') delay: number | string = 0;

  ngOnInit() {
    const el = this.host.nativeElement;
    el.classList.add('reveal');

    const d = Number(this.delay) || 0;
    if (d > 0) el.style.setProperty('--reveal-delay', `${d}ms`);

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      el.classList.add('in-view');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    this.observer.observe(el);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
