import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';
import { RevealDirective } from '../reveal.directive';

/**
 * "How it works": three columns, each a header row, a custom visual, body copy
 * and a footnote chip, with dashed arrows in the gaps between them.
 *
 * The four rows are aligned across all three columns with `grid-template-rows:
 * subgrid` — each column stretches its visual to the tallest of the three, so
 * the bodies and chips line up without hardcoded heights.
 *
 * Every visual is a fixed 340×220 coordinate space (`aspect-ratio: 17/11`) with
 * `container-type: inline-size`, so internals sized in `cqw` scale as one piece
 * and any SVG viewBox stays locked to the layout. At the reference width
 * 1cqw = 3.4px; px equivalents are noted where the ratios are not obvious.
 */
@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="solution" class="steps">
      <div class="container">
        <div class="section-head" [meReveal]="0">
          <span class="eyebrow">{{ i18n.t().steps.eyebrow }}</span>
          <h2>
            {{ i18n.t().steps.titleLead }}
            <span class="st-accent">{{ i18n.t().steps.titleAccent }}</span>
          </h2>
          <p class="st-lead">{{ i18n.t().steps.lead }}</p>
        </div>

        <div class="flow">
          @for (s of i18n.t().steps.items; track s.step; let i = $index) {
            <article class="step" [style.gridColumn]="i * 2 + 1" [meReveal]="i * 110">
              <header class="step-head">
                <span class="step-num">{{ s.step }}</span>
                <h3>{{ s.title }}</h3>
              </header>

              <div class="visual">
                @switch (i) {
                  @case (0) {
                    <div class="v-connect">
                      <svg class="v-wires" viewBox="0 0 340 220" aria-hidden="true">
                        @for (d of connectWires; track $index) {
                          <path [attr.d]="d" />
                        }
                      </svg>
                      <ul class="src-list">
                        @for (src of i18n.t().steps.connectSources; track src.label) {
                          <li>
                            <span class="src-icon">
                              @switch (src.icon) {
                                @case ('contract') { <svg viewBox="0 0 24 24" fill="none"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" stroke="currentColor" stroke-width="2"/><path d="M14 3v6h6M8 14h7M8 17h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg> }
                                @case ('mail') { <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="2"/><path d="m3.5 7 8.5 6 8.5-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg> }
                                @case ('support') { <svg viewBox="0 0 24 24" fill="none"><path d="M4 13a8 8 0 0 1 16 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="2.5" y="13" width="4.5" height="7" rx="2" stroke="currentColor" stroke-width="2"/><rect x="17" y="13" width="4.5" height="7" rx="2" stroke="currentColor" stroke-width="2"/></svg> }
                                @case ('meeting') { <svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3.2" stroke="currentColor" stroke-width="2"/><path d="M3 19a6 6 0 0 1 12 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M16 5.5a3.2 3.2 0 0 1 0 5M18 19a6 6 0 0 0-2-4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg> }
                                @case ('system') { <svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" stroke-width="2"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" stroke="currentColor" stroke-width="2"/></svg> }
                                @case ('document') { <svg viewBox="0 0 24 24" fill="none"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M14 3v6h6" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg> }
                              }
                            </span>
                            <span class="src-label">{{ src.label }}</span>
                          </li>
                        }
                      </ul>
                      <div class="src-hub">
                        <img src="assets/brand/logo-mark.png" alt="" />
                      </div>
                    </div>
                  }

                  @case (1) {
                    <div class="v-ai">
                      <div class="ai-orbit">
                        <svg viewBox="0 0 150 196" aria-hidden="true">
                          @for (r of orbitRings; track $index) {
                            <circle cx="75" cy="98" [attr.r]="r" />
                          }
                          @for (d of orbitDots; track $index) {
                            <circle class="dot" [attr.cx]="d.cx" [attr.cy]="d.cy" [attr.r]="d.r" />
                          }
                        </svg>
                        <span class="ai-core">
                          <svg viewBox="0 0 24 24" fill="none"><path d="m12 3 1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4L12 3Z" fill="currentColor"/><path d="M18.5 15.5 19.3 18l2.5.8-2.5.8-.8 2.5-.8-2.5-2.5-.8 2.5-.8.8-2.5Z" fill="currentColor" opacity="0.75"/></svg>
                        </span>
                      </div>
                      <ul class="cap-list">
                        @for (c of i18n.t().steps.aiCapabilities; track c.label) {
                          <li>
                            <span class="cap-icon">
                              @switch (c.icon) {
                                @case ('patterns') { <svg viewBox="0 0 24 24" fill="none"><circle cx="6" cy="6" r="2.4" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="6" r="2.4" stroke="currentColor" stroke-width="2"/><circle cx="6" cy="18" r="2.4" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="18" r="2.4" stroke="currentColor" stroke-width="2"/><path d="M8.4 6h7.2M6 8.4v7.2M18 8.4v7.2M8.4 18h7.2" stroke="currentColor" stroke-width="2"/></svg> }
                                @case ('signals') { <svg viewBox="0 0 24 24" fill="none"><path d="M2 12h4l3-7 4 14 3-7h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> }
                                @case ('risks') { <svg viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 3.5h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> }
                                @case ('opportunities') { <svg viewBox="0 0 24 24" fill="none"><path d="M3 17 9 11l4 4 8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 7h6v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> }
                                @case ('context') { <svg viewBox="0 0 24 24" fill="none"><path d="M21 14a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v9Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg> }
                              }
                            </span>
                            <span class="cap-label">{{ c.label }}</span>
                          </li>
                        }
                      </ul>
                    </div>
                  }

                  @case (2) {
                    <div class="v-insights">
                      <header class="ins-head">
                        <span class="ins-title">{{ i18n.t().steps.insights.title }}</span>
                        <span class="ins-sort">
                          {{ i18n.t().steps.insights.sortLabel }}
                          <svg viewBox="0 0 24 24" fill="none"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </span>
                      </header>
                      <ul class="ins-list">
                        @for (r of i18n.t().steps.insights.rows; track r.title) {
                          <li>
                            <span class="ins-icon" [class]="'ins-icon tone-' + r.tone">
                              @switch (r.icon) {
                                @case ('risk') { <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 7.5v5m0 3.5h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg> }
                                @case ('growth') { <svg viewBox="0 0 24 24" fill="none"><path d="M4 18 10 12l3.5 3.5L20 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.5 8H20v5.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> }
                                @case ('action') { <svg viewBox="0 0 24 24" fill="none"><path d="M12 9.5v4m0 3h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> }
                                @case ('improvement') { <svg viewBox="0 0 24 24" fill="none"><path d="M4 17 9.5 11l3.5 3.5L20 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 7.5h5v5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> }
                                @case ('document') { <svg viewBox="0 0 24 24" fill="none"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M14 3v6h6M8 14h7M8 17h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg> }
                              }
                            </span>
                            <span class="ins-text">
                              <b>{{ r.title }}</b>
                              <em>{{ r.sub }}</em>
                            </span>
                            <span class="ins-tag" [class]="'ins-tag tone-' + r.tone">{{ r.tag }}</span>
                            <span class="ins-score">{{ r.score }}</span>
                          </li>
                        }
                      </ul>
                    </div>
                  }

                }
              </div>

              <p class="step-body">{{ s.body }}</p>

              <span class="step-chip" [class]="'step-chip chip-' + s.tone">
                @switch (s.tone) {
                  @case ('neutral') { <svg viewBox="0 0 24 24" fill="none"><path d="M12 3 5 5.6v5.9c0 4.2 2.9 7.2 7 8.5 4.1-1.3 7-4.3 7-8.5V5.6L12 3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="m9.2 12 2 2 3.6-3.8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> }
                  @case ('blue') { <svg viewBox="0 0 24 24" fill="none"><rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" stroke-width="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" stroke-width="2"/></svg> }
                  @case ('accent') { <svg viewBox="0 0 24 24" fill="none"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg> }
                }
                {{ s.chip }}
              </span>
            </article>

            @if (!$last) {
              <span class="arrow" [style.gridColumn]="i * 2 + 2" aria-hidden="true">
                <svg viewBox="0 0 40 12" fill="none">
                  <path d="M1 6h27" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="5 5"/>
                  <path d="m31 2 5 4-5 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            }
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .steps { padding: 88px 0; }
    .section-head { max-width: 880px; }
    .st-accent { color: var(--accent); }
    .st-lead {
      color: var(--ink-muted); font-size: 1.06rem; line-height: 1.55;
      max-width: 640px; margin: 0 auto;
    }

    /* ---------- FLOW ---------- */
    /* Arrow columns are their own grid tracks rather than absolutely
       positioned, so they can never drift out of the gutters. */
    .flow {
      display: grid;
      grid-template-columns: 1fr 44px 1fr 44px 1fr;
      grid-template-rows: auto auto auto auto;
      column-gap: 20px;
      margin-top: 44px;
    }
    .step {
      grid-row: 1 / -1;
      display: grid;
      grid-template-rows: subgrid;
      row-gap: 16px;
      align-content: start;
    }
    .arrow {
      grid-row: 2;
      align-self: center;
      color: var(--ink-dim);
      display: inline-flex; justify-content: center;
    }
    .arrow svg { width: 40px; height: 12px; }

    .step-head { display: flex; align-items: center; gap: 12px; }
    .step-num {
      flex: 0 0 auto;
      width: 38px; height: 38px; border-radius: 50%;
      border: 1.5px solid var(--accent-soft-2);
      color: var(--accent);
      font-family: var(--font-display); font-size: 0.85rem; font-weight: 700;
      display: inline-flex; align-items: center; justify-content: center;
      letter-spacing: 0.02em;
    }
    .step-head h3 { font-size: 1.18rem; margin: 0; letter-spacing: -0.015em; }

    .step-body { color: var(--ink-muted); font-size: 0.95rem; line-height: 1.6; margin: 0; }

    .step-chip {
      justify-self: start;
      display: inline-flex; align-items: center; gap: 8px;
      padding: 9px 14px; border-radius: 999px;
      font-size: 0.86rem; font-weight: 500;
    }
    .step-chip svg { width: 16px; height: 16px; flex: 0 0 auto; }
    .chip-neutral { background: var(--surface); border: 1px solid var(--border-strong); color: var(--ink); }
    .chip-neutral svg { color: var(--accent); }
    .chip-blue {
      background: color-mix(in srgb, var(--blue) 10%, var(--surface));
      border: 1px solid color-mix(in srgb, var(--blue) 32%, transparent);
      color: var(--blue);
    }
    .chip-accent {
      background: var(--accent-soft);
      border: 1px solid var(--accent-soft-2);
      color: var(--accent);
    }

    /* ---------- VISUAL SHELL ---------- */
    /* 340×220 reference space; 1cqw = 3.4px at that width. */
    .visual { container-type: inline-size; aspect-ratio: 17 / 11; position: relative; }

    /* ---------- 01 · CONNECT ---------- */
    .v-connect { position: absolute; inset: 0; }
    .v-wires { position: absolute; inset: 0; width: 100%; height: 100%; }
    .v-wires path {
      fill: none;
      stroke: color-mix(in srgb, var(--ink-muted) 45%, transparent);
      stroke-width: 1.4; stroke-dasharray: 4 4; stroke-linecap: round;
    }
    .src-list {
      position: absolute; left: 0; top: 0; bottom: 0;
      width: 48.5cqw;                    /* 165px */
      list-style: none; margin: 0; padding: 0;
      display: flex; flex-direction: column; justify-content: center; gap: 1.5cqw;
    }
    .src-list li {
      display: flex; align-items: center; gap: 2cqw;
      height: 8.2cqw;                    /* 28px */
      padding: 0 2.4cqw;
      background: var(--surface);
      border: 1px solid var(--border-strong);
      border-radius: 2cqw;
      box-shadow: var(--shadow-soft);
    }
    .src-icon { color: var(--accent); display: inline-flex; flex: 0 0 auto; }
    .src-icon svg { width: 3.8cqw; height: 3.8cqw; }
    .src-label { font-size: 3.1cqw; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .src-hub {
      position: absolute; right: 0.6cqw; top: 50%; transform: translateY(-50%);
      width: 16.5cqw; height: 16.5cqw; border-radius: 3.5cqw;
      background: var(--surface);
      border: 1px solid var(--border-strong);
      box-shadow: var(--shadow-lg);
      display: inline-flex; align-items: center; justify-content: center;
    }
    .src-hub img { width: 11cqw; height: auto; display: block; }

    /* ---------- 02 · AI ---------- */
    .v-ai {
      position: absolute; inset: 0;
      display: flex; align-items: center; gap: 2cqw;
      padding: 3.5cqw;
      background: color-mix(in srgb, var(--blue) 6%, var(--surface));
      border: 1px solid color-mix(in srgb, var(--blue) 18%, transparent);
      border-radius: 4.1cqw;
    }
    .ai-orbit { position: relative; flex: 0 0 45%; align-self: stretch; }
    .ai-orbit svg { width: 100%; height: 100%; display: block; }
    .ai-orbit circle { fill: none; stroke: color-mix(in srgb, var(--blue) 22%, transparent); stroke-width: 1; }
    .ai-orbit circle.dot { fill: var(--blue); stroke: none; }
    .ai-core {
      position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
      width: 10cqw; height: 10cqw; border-radius: 2.8cqw;
      background: linear-gradient(150deg, #6BB0FF, var(--blue));
      color: #fff;
      display: inline-flex; align-items: center; justify-content: center;
      box-shadow: 0 0.9cqw 2.6cqw color-mix(in srgb, var(--blue) 45%, transparent);
    }
    .ai-core svg { width: 5.6cqw; height: 5.6cqw; }
    .cap-list {
      flex: 1; list-style: none; margin: 0; padding: 0;
      display: flex; flex-direction: column; gap: 1.6cqw;
    }
    .cap-list li {
      display: flex; align-items: center; gap: 1.9cqw;
      height: 7.8cqw;
      padding: 0 2.2cqw;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 1.9cqw;
    }
    .cap-icon { color: var(--blue); display: inline-flex; flex: 0 0 auto; }
    .cap-icon svg { width: 3.5cqw; height: 3.5cqw; }
    .cap-label { font-size: 3cqw; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

    /* ---------- 03 · INSIGHTS ---------- */
    .v-insights {
      position: absolute; inset: 0;
      display: flex; flex-direction: column;
      background: var(--surface);
      border: 1px solid var(--border-strong);
      border-radius: 3.5cqw;
      box-shadow: var(--shadow-lg);
      overflow: hidden;
    }
    .ins-head {
      display: flex; align-items: center; justify-content: space-between; gap: 2cqw;
      padding: 2.6cqw 3.2cqw;
      border-bottom: 1px solid var(--border);
    }
    .ins-title { font-family: var(--font-display); font-size: 3.4cqw; font-weight: 700; color: var(--ink); }
    .ins-sort {
      display: inline-flex; align-items: center; gap: 1cqw;
      font-size: 2.4cqw; color: var(--ink-muted);
      padding: 1.2cqw 2cqw; border-radius: 999px;
      background: var(--surface-2);
      border: 1px solid var(--border-strong);
      white-space: nowrap;
    }
    .ins-sort svg { width: 2.4cqw; height: 2.4cqw; }

    .ins-list { list-style: none; margin: 0; padding: 0; flex: 1; display: flex; flex-direction: column; }
    .ins-list li {
      flex: 1;
      display: flex; align-items: center; gap: 2.2cqw;
      padding: 0 3.2cqw;
      border-bottom: 1px solid var(--border);
    }
    .ins-list li:last-child { border-bottom: 0; }

    .ins-icon {
      flex: 0 0 auto;
      width: 7cqw; height: 7cqw; border-radius: 2cqw;
      display: inline-flex; align-items: center; justify-content: center;
    }
    .ins-icon svg { width: 4cqw; height: 4cqw; }

    .ins-text { flex: 1; min-width: 0; display: block; }
    .ins-text b {
      display: block; font-size: 2.9cqw; font-weight: 600; color: var(--ink);
      line-height: 1.2; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .ins-text em {
      display: block; font-size: 2.4cqw; font-style: normal; color: var(--ink-muted);
      line-height: 1.25; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }

    .ins-tag {
      flex: 0 0 auto;
      font-size: 2cqw; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
      padding: 0.9cqw 1.7cqw; border-radius: 1.2cqw; white-space: nowrap;
    }
    .ins-score {
      flex: 0 0 auto; min-width: 6cqw; text-align: right;
      font-family: var(--font-display);
      font-size: 3.3cqw; font-weight: 700; color: var(--ink);
      font-variant-numeric: tabular-nums;
    }

    /* Semantic status colours. These are not brand tokens — a risk row has to
       read as red and an opportunity as green regardless of the palette — so
       they are defined here and tinted per theme below. */
    .v-insights {
      --st-risk: #D6453C;
      --st-opportunity: #1F9D62;
      --st-action: #E07A1F;
      --st-improvement: #3E92F5;
    }
    .tone-risk { color: var(--st-risk); background: color-mix(in srgb, var(--st-risk) 12%, transparent); }
    .tone-opportunity { color: var(--st-opportunity); background: color-mix(in srgb, var(--st-opportunity) 12%, transparent); }
    .tone-action { color: var(--st-action); background: color-mix(in srgb, var(--st-action) 13%, transparent); }
    .tone-improvement { color: var(--st-improvement); background: color-mix(in srgb, var(--st-improvement) 13%, transparent); }


    /* ---------- RESPONSIVE ---------- */
    @media (max-width: 1000px) {
      /* Subgrid alignment only earns its keep side by side; stacked, each
         column sizes itself. */
      .flow { display: flex; flex-direction: column; gap: 12px; margin-top: 32px; }
      .step { display: flex; flex-direction: column; gap: 16px; max-width: 520px; width: 100%; margin: 0 auto; }
      .arrow { transform: rotate(90deg); align-self: center; }
      .visual { width: 100%; }
    }
    @media (max-width: 640px) {
      .steps { padding: 64px 0; }
      .step-head h3 { font-size: 1.05rem; }
    }
  `],
})
export class StepsComponent {
  readonly i18n = inject(I18nService);

  readonly orbitRings = [26, 42, 58, 72];

  /**
   * Six dashed feeds converging on the hub. Row centres are derived from the
   * same box model the CSS uses — 28px rows, 5px gaps, centred in 220 — so the
   * wires meet each card rather than floating near it.
   */
  readonly connectWires = StepsComponent.buildWires();

  /** Scattered dots inside the orbit rings; seeded for a stable render. */
  readonly orbitDots = StepsComponent.buildOrbitDots();

  private static buildWires(): string[] {
    const rows = 6;
    const rowH = 28;
    const gap = 5;
    const total = rows * rowH + (rows - 1) * gap;
    const top = (220 - total) / 2;

    return Array.from({ length: rows }, (_, i) => {
      const y = +(top + rowH / 2 + i * (rowH + gap)).toFixed(1);
      return `M167,${y} C212,${y} 236,110 279,110`;
    });
  }

  private static buildOrbitDots() {
    let seed = 731;
    const rand = () => (seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296;

    return Array.from({ length: 26 }, () => {
      const angle = rand() * Math.PI * 2;
      const radius = 18 + rand() * 56;
      return {
        cx: +(75 + Math.cos(angle) * radius).toFixed(1),
        cy: +(98 + Math.sin(angle) * radius).toFixed(1),
        r: +(1 + rand() * 1.4).toFixed(2),
      };
    });
  }

}
