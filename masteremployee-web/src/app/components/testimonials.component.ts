import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';
import { testimonials } from '../i18n/translations';

@Component({
  selector: 'app-testimonials',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="testimonials" class="testimonials">
      <div class="container section-head">
        <span class="eyebrow">{{ i18n.t().testimonials.eyebrow }}</span>
        <h2>{{ i18n.t().testimonials.title }}</h2>
        <p>{{ i18n.t().testimonials.lead }}</p>
      </div>
      <div class="marquee" aria-hidden="false">
        <div class="track">
          @for (t of loop(); track $index) {
            <figure class="quote">
              <svg class="mark" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7.17 6C4.31 7.08 2.5 9.8 2.5 13v5H9v-6H5.5c0-2.2 1.53-4.04 3.67-4.72L7.17 6Zm10 0c-2.86 1.08-4.67 3.8-4.67 7v5h6.5v-6H15.5c0-2.2 1.53-4.04 3.67-4.72L17.17 6Z" fill="currentColor"/>
              </svg>
              <blockquote>{{ localized(t) }}</blockquote>
              <figcaption>{{ role(t) }}</figcaption>
            </figure>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials { overflow: hidden; background: linear-gradient(180deg, transparent, rgba(15,31,66,0.35) 50%, transparent); }
    .marquee {
      -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
      mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
      overflow: hidden;
    }
    .track {
      display: flex;
      gap: 20px;
      padding: 12px 0;
      width: max-content;
      animation: scroll 55s linear infinite;
    }
    .track:hover { animation-play-state: paused; }
    @keyframes scroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
    .quote {
      margin: 0;
      min-width: 340px;
      max-width: 380px;
      padding: 24px 24px 22px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      display: flex;
      flex-direction: column;
      gap: 12px;
      position: relative;
    }
    .mark { color: var(--accent); opacity: 0.9; }
    blockquote {
      margin: 0;
      color: var(--ink);
      font-size: 1.02rem;
      line-height: 1.5;
      font-weight: 500;
    }
    figcaption {
      color: var(--ink-dim);
      font-size: 0.85rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-weight: 600;
    }
  `],
})
export class TestimonialsComponent {
  readonly i18n = inject(I18nService);
  readonly loop = computed(() => [...testimonials, ...testimonials]);

  localized(t: typeof testimonials[number]): string {
    return this.i18n.lang() === 'no' ? t.quote_no : t.quote_en;
  }
  role(t: typeof testimonials[number]): string {
    return this.i18n.lang() === 'no' ? t.role_no : t.role_en;
  }
}
