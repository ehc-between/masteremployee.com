import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';
import { testimonials as DATA } from '../i18n/translations';

@Component({
  selector: 'app-testimonials',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="testimonials" class="testimonials">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">{{ i18n.t().testimonials.eyebrow }}</span>
          <h2>{{ i18n.t().testimonials.title }}</h2>
          <p>{{ i18n.t().testimonials.lead }}</p>
        </div>
        <div class="t-grid">
          @for (t of items(); track t.quote; let i = $index) {
            <figure class="t-card" [style.--i]="i">
              <svg class="quote-mark" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 7h4v4H7c0 3 1 4 3 5v2c-4-1-6-4-6-7V7Zm10 0h4v4h-4c0 3 1 4 3 5v2c-4-1-6-4-6-7V7Z" fill="currentColor"/>
              </svg>
              <blockquote>"{{ t.quote }}"</blockquote>
              <figcaption>
                <span class="role-dot"></span>
                <span>{{ t.role }}</span>
              </figcaption>
            </figure>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .testimonials { padding: 96px 0; }
    .t-grid {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px;
    }
    @media (max-width: 1020px) { .t-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .t-grid { grid-template-columns: 1fr; } }
    .t-card {
      position: relative;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 28px 24px 22px;
      margin: 0;
      transition: border-color 0.2s ease, transform 0.2s ease;
    }
    .t-card:hover { border-color: var(--accent); transform: translateY(-2px); }
    .quote-mark { position: absolute; top: 18px; right: 20px; color: var(--accent); opacity: 0.35; }
    blockquote {
      margin: 0 0 18px; font-size: 1.02rem; line-height: 1.55; color: var(--ink);
      letter-spacing: -0.005em; text-wrap: pretty;
    }
    figcaption {
      display: inline-flex; align-items: center; gap: 8px;
      font-size: 0.82rem; color: var(--ink-muted); font-weight: 500;
    }
    .role-dot {
      width: 6px; height: 6px; border-radius: 50%; background: var(--accent);
    }
  `],
})
export class TestimonialsComponent {
  readonly i18n = inject(I18nService);
  readonly items = computed(() => {
    const lang = this.i18n.lang();
    return DATA.map(t => ({
      quote: lang === 'no' ? t.quote_no : t.quote_en,
      role: lang === 'no' ? t.role_no : t.role_en,
    }));
  });
}
