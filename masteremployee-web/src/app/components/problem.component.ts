import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';
import { RevealDirective } from '../reveal.directive';

/** A dot in the scattered-data cloud, in the diagram's 1200×620 coordinate space. */
interface Particle {
  cx: number;
  cy: number;
  r: number;
  accent: boolean;
}

/**
 * "The problem" section: a node diagram with seven data sources ringing a
 * scattered-data core, over a consequences bar.
 *
 * The diagram is a fixed 1200×620 coordinate space. Nodes are positioned in
 * percentages of that space and the SVG shares the same viewBox, so wires and
 * cards stay aligned at any width. Type scales with `cqw` units against the
 * container, which keeps the whole composition proportional instead of letting
 * fixed-px text grow relative to the shrinking canvas. Below 1000px the layout
 * drops to a plain stack and the wires are hidden.
 */
@Component({
  selector: 'app-problem',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="problem" class="problem">
      <div class="container">
        <div class="section-head" [meReveal]="0">
          <h2>
            <span class="ph-line">{{ i18n.t().problem.titleLead }}</span>
            <span class="ph-line ph-accent">{{ i18n.t().problem.titleAccent }}</span>
          </h2>
          <p class="ph-lead">{{ i18n.t().problem.lead }}</p>
          <p class="ph-emphasis">
            {{ i18n.t().problem.emphasisLead }}
            <strong>{{ i18n.t().problem.emphasisStrong }}</strong>
          </p>
          <span class="eyebrow">{{ i18n.t().problem.eyebrow }}</span>
        </div>

        <div class="diagram" [meReveal]="80">
          <div class="canvas">
            <svg class="wires" viewBox="0 0 1200 540" aria-hidden="true">
              @for (w of wires; track $index) {
                <path [attr.d]="w" />
              }
              @for (p of particles; track $index) {
                <circle
                  [attr.cx]="p.cx"
                  [attr.cy]="p.cy"
                  [attr.r]="p.r"
                  [class.accent]="p.accent" />
              }

              <!-- Invisible rails: same shape as the visible wires but carried
                   on to the core, so packets slide under the centre card
                   instead of stopping at the cloud's edge. -->
              @for (m of motionPaths; track $index) {
                <path class="rail" [attr.id]="'rail-' + $index" [attr.d]="m" />
              }
              @for (m of motionPaths; track $index; let i = $index) {
                <g class="packet">
                  <rect x="-6.5" y="-8" width="13" height="16" rx="2.5" />
                  <path class="packet-lines" d="M-3.4 -3.5h6.8M-3.4 0h6.8M-3.4 3.5h4.4" />
                  <animateMotion
                    [attr.dur]="packetDur"
                    [attr.begin]="i * packetStagger + 's'"
                    repeatCount="indefinite">
                    <mpath [attr.href]="'#rail-' + i" />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.12;0.72;0.95"
                    [attr.dur]="packetDur"
                    [attr.begin]="i * packetStagger + 's'"
                    repeatCount="indefinite" />
                </g>
              }
            </svg>

            @for (s of i18n.t().problem.sources; track s.title; let i = $index) {
              <article class="node" [class]="'node node-' + i">
                <span class="node-icon">
                  @switch (s.icon) {
                    @case ('contract') {
                      <svg viewBox="0 0 24 24" fill="none"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" stroke="currentColor" stroke-width="2.1" stroke-linejoin="round"/><path d="M14 3v6h6M8 14h8M8 17h5" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/></svg>
                    }
                    @case ('mail') {
                      <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="2.1"/><path d="m3.5 7 8.5 6 8.5-6" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/></svg>
                    }
                    @case ('support') {
                      <svg viewBox="0 0 24 24" fill="none"><path d="M4 13a8 8 0 0 1 16 0" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/><rect x="2.5" y="13" width="4.5" height="7" rx="2" stroke="currentColor" stroke-width="2.1"/><rect x="17" y="13" width="4.5" height="7" rx="2" stroke="currentColor" stroke-width="2.1"/></svg>
                    }
                    @case ('meeting') {
                      <svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3.2" stroke="currentColor" stroke-width="2.1"/><path d="M3 19a6 6 0 0 1 12 0" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/><path d="M16 5.5a3.2 3.2 0 0 1 0 5M18 19a6 6 0 0 0-2-4.5" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/></svg>
                    }
                    @case ('claim') {
                      <svg viewBox="0 0 24 24" fill="none"><path d="M12 3 5 5.6v5.9c0 4.2 2.9 7.2 7 8.5 4.1-1.3 7-4.3 7-8.5V5.6L12 3Z" stroke="currentColor" stroke-width="2.1" stroke-linejoin="round"/><path d="m9.2 12 2 2 3.6-3.8" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    }
                    @case ('delivery') {
                      <svg viewBox="0 0 24 24" fill="none"><path d="M2 7h11v9H2zM13 10h4l3 3v3h-7z" stroke="currentColor" stroke-width="2.1" stroke-linejoin="round"/><circle cx="6.5" cy="18" r="1.8" stroke="currentColor" stroke-width="2.1"/><circle cx="16.5" cy="18" r="1.8" stroke="currentColor" stroke-width="2.1"/></svg>
                    }
                    @case ('invoice') {
                      <svg viewBox="0 0 24 24" fill="none"><path d="M5 3h14v18l-2.3-1.6L14.4 21 12 19.4 9.6 21l-2.3-1.6L5 21V3Z" stroke="currentColor" stroke-width="2.1" stroke-linejoin="round"/><path d="M9 8h6M9 12h6" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/></svg>
                    }
                  }
                </span>
                <div class="node-text">
                  <h3>{{ s.title }}</h3>
                  <p>{{ s.body }}</p>
                </div>
              </article>
            }

            <div class="core">
              <span class="core-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" fill="currentColor"/><circle cx="12" cy="4" r="1.6" fill="currentColor"/><circle cx="12" cy="20" r="1.6" fill="currentColor"/><circle cx="4" cy="12" r="1.6" fill="currentColor"/><circle cx="20" cy="12" r="1.6" fill="currentColor"/><circle cx="6.3" cy="6.3" r="1.4" fill="currentColor"/><circle cx="17.7" cy="17.7" r="1.4" fill="currentColor"/><circle cx="17.7" cy="6.3" r="1.4" fill="currentColor"/><circle cx="6.3" cy="17.7" r="1.4" fill="currentColor"/></svg>
              </span>
              <div>
                <div class="core-title">{{ i18n.t().problem.coreTitle }}</div>
                <div class="core-sub">{{ i18n.t().problem.coreSub }}</div>
              </div>
            </div>

            @for (h of i18n.t().problem.hints; track h; let i = $index) {
              <span class="hint" [class]="'hint hint-' + i">{{ h }}</span>
            }
          </div>
        </div>

        <div class="missed" [meReveal]="160">
          <div class="missed-head">
            <span class="missed-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none"><path d="M12 9v4.5m0 3.5h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
            <div>
              <h3>{{ i18n.t().problem.missedTitle }}</h3>
              <p>{{ i18n.t().problem.missedBody }}</p>
            </div>
          </div>
          @for (m of i18n.t().problem.missedItems; track m.title) {
            <div class="missed-item">
              <span class="missed-icon">
                @switch (m.icon) {
                  @case ('churn') {
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3.2" stroke="currentColor" stroke-width="2.1"/><path d="M3 19a6 6 0 0 1 12 0" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/><path d="m16.5 8 5 5m0-5-5 5" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/></svg>
                  }
                  @case ('revenue') {
                    <svg viewBox="0 0 24 24" fill="none"><path d="M3 20V10M9 20V5M15 20v-7M21 20V8" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/><path d="m14 6 3-2 2 3" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  }
                  @case ('ops') {
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2.1"/><path d="M12 7.5v5m0 3.5h.01" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/></svg>
                  }
                  @case ('compliance') {
                    <svg viewBox="0 0 24 24" fill="none"><path d="M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 3v6h6" stroke="currentColor" stroke-width="2.1" stroke-linejoin="round"/><circle cx="17" cy="17" r="4" stroke="currentColor" stroke-width="2.1"/><path d="m15.4 17 1.1 1.1 2.1-2.2" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  }
                }
              </span>
              <div>
                <h4>{{ m.title }}</h4>
                <p>{{ m.body }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Asymmetric on purpose: the trust strip above already contributes 32px of
       its own bottom padding, so a matching 88px here read as a dead band. */
    .problem { background: var(--surface-2); padding: 40px 0 80px; }

    /* ---------- HEAD ---------- */
    .section-head { max-width: 900px; margin-bottom: 0; }
    /* The pill now trails the copy, so its global bottom margin has to flip. */
    .section-head .eyebrow { margin: 14px 0 0; }
    .ph-line { display: block; }
    .ph-accent { color: var(--accent); }
    .ph-lead {
      color: var(--ink-muted); font-size: 1.06rem; line-height: 1.55;
      max-width: 680px; margin: 0 auto 14px;
    }
    .ph-emphasis { color: var(--ink-muted); font-size: 1.06rem; margin: 0; }
    .ph-emphasis strong { color: var(--ink); font-weight: 600; }

    /* ---------- DIAGRAM ---------- */
    .diagram { container-type: inline-size; margin: 8px 0 40px; }
    /* 1200×540, not 1200×620 — the taller box left an empty band under the
       Invoices card that pushed the consequences bar out of view. */
    .canvas { position: relative; aspect-ratio: 1200 / 540; }

    .wires { position: absolute; inset: 0; width: 100%; height: 100%; }
    .wires path {
      fill: none;
      /* Tied to --ink-muted rather than a border token so the wires keep the
         same weight against both the light and dark surface. */
      stroke: color-mix(in srgb, var(--ink-muted) 58%, transparent);
      stroke-width: 2.2;
      stroke-dasharray: 6 7;
      stroke-linecap: round;
    }
    .wires circle { fill: color-mix(in srgb, var(--ink-muted) 52%, transparent); }
    .wires circle.accent { fill: var(--blue); }

    /* Motion rails carry the packets; they must never paint. */
    .rail { fill: none; stroke: none; }
    .packet rect {
      fill: var(--surface);
      stroke: var(--accent);
      stroke-width: 1.5;
    }
    .packet .packet-lines {
      fill: none;
      stroke: var(--accent);
      stroke-width: 1.2;
      stroke-linecap: round;
      opacity: 0.65;
    }

    .node {
      position: absolute;
      width: 19.6%;
      display: flex; gap: 1cqw; align-items: flex-start;
      background: var(--surface);
      border: 1.5px solid var(--border-strong);
      border-radius: 0.9cqw;
      padding: 1.2cqw;
      box-shadow: var(--shadow-soft);
    }
    .node-icon {
      flex: 0 0 auto;
      width: 3.6cqw; height: 3.6cqw; border-radius: 0.8cqw;
      background: var(--accent-soft-2);
      color: var(--accent);
      display: inline-flex; align-items: center; justify-content: center;
    }
    .node-icon svg { width: 2.2cqw; height: 2.2cqw; }
    .node-text h3 {
      font-size: 1.38cqw; font-weight: 700; line-height: 1.25;
      margin: 0 0 0.3cqw; letter-spacing: -0.01em;
    }
    .node-text p { font-size: 1.14cqw; line-height: 1.35; color: var(--ink-muted); margin: 0; }

    /* Percentages are the same viewBox y values over the 540 height, so the
       cards stay locked to the wire endpoints. */
    .node-0 { left: 0;      top: 3.7%; }
    .node-1 { left: 0;      top: 28.1%; }
    .node-2 { left: 0;      top: 55.6%; }
    .node-3 { left: 81.6%;  top: 3.7%; }
    .node-4 { left: 81.6%;  top: 28.1%; }
    .node-5 { left: 81.6%;  top: 55.6%; }
    .node-6 { left: 35.8%;  top: 77.7%; width: 20%; }

    .core {
      position: absolute; left: 36%; top: 43.9%; width: 28%;
      display: flex; align-items: center; gap: 1cqw;
      background: var(--surface);
      border: 2.5px solid var(--accent);
      border-radius: 1cqw;
      padding: 1.3cqw;
      box-shadow: var(--shadow-lg);
    }
    .core-mark { color: var(--accent); display: inline-flex; }
    .core-mark svg { width: 2.4cqw; height: 2.4cqw; }
    .core-title {
      font-family: var(--font-display);
      font-size: 1.42cqw; font-weight: 700;
      letter-spacing: 0.08em; text-transform: uppercase;
      color: var(--ink);
    }
    .core-sub { font-size: 1.05cqw; color: var(--ink-muted); margin-top: 0.2cqw; }

    .hint {
      position: absolute;
      font-size: 1.08cqw; font-weight: 600; line-height: 1;
      padding: 0.7cqw 1cqw; border-radius: 999px;
      background: color-mix(in srgb, var(--blue) 10%, var(--surface));
      border: 1.5px solid color-mix(in srgb, var(--blue) 60%, transparent);
      color: var(--blue);
      white-space: nowrap;
    }
    /* Top and bottom pills centre on the canvas midline via translate rather
       than a guessed left offset, so they stay centred whatever the label's
       length — which also differs between EN and NO. The side pills are
       anchored by their inner edge, 3% clear of the core box (36%–64%). */
    .hint-0 { left: 50%; top: 24.7%; transform: translateX(-50%); }
    .hint-1 { right: 67%; top: 45.4%; }
    .hint-2 { left: 67%;  top: 45.4%; }
    .hint-3 { left: 50%; top: 65.4%; transform: translateX(-50%); }

    /* ---------- CONSEQUENCES BAR ---------- */
    /* Equal columns with tight gutters: the previous 1.25fr lead column plus
       28px gutters left each item ~130px of text width, which wrapped every
       line four deep and drove the bar's height. */
    .missed {
      display: grid; grid-template-columns: repeat(5, 1fr);
      gap: 18px;
      background: var(--accent-soft);
      border: 1px solid var(--accent-soft-2);
      border-radius: var(--radius-lg);
      padding: 22px 26px;
    }
    .missed-head { display: flex; gap: 12px; align-items: flex-start; }
    .missed-mark {
      flex: 0 0 auto; width: 38px; height: 38px; border-radius: 50%;
      background: var(--accent-soft-2); color: var(--accent);
      display: inline-flex; align-items: center; justify-content: center;
    }
    .missed-mark svg { width: 20px; height: 20px; }
    .missed-head h3 {
      font-size: 0.98rem; font-weight: 700; color: var(--accent);
      margin: 0 0 5px; text-wrap: balance;
    }
    .missed-head p { font-size: 0.85rem; line-height: 1.4; color: var(--ink-muted); margin: 0; }

    .missed-item {
      display: flex; gap: 10px; align-items: flex-start;
      padding-left: 18px;
      border-left: 1px solid var(--accent-soft-2);
    }
    .missed-icon { flex: 0 0 auto; color: var(--accent); display: inline-flex; margin-top: 1px; }
    .missed-icon svg { width: 20px; height: 20px; }
    .missed-item h4 {
      font-size: 0.9rem; font-weight: 700; color: var(--accent);
      margin: 0 0 4px; text-wrap: balance;
    }
    .missed-item p { font-size: 0.83rem; line-height: 1.4; color: var(--ink-muted); margin: 0; }

    /* ---------- DARK THEME ---------- */
    /* In dark mode --surface (#16161A) sits almost on top of the section's
       --surface-2 (#121215), so the cards read as flat patches — and the
       drop shadows that separate them in light mode are invisible against a
       dark background. Lift every surface with a neutral mix of --ink and
       carry the separation on borders instead. */
    :host-context([data-theme='dark']) {
      .node,
      .core,
      .packet rect {
        background: color-mix(in srgb, var(--ink) 9%, var(--surface));
        fill: color-mix(in srgb, var(--ink) 9%, var(--surface));
      }
      .node {
        border-color: color-mix(in srgb, var(--ink) 20%, transparent);
        box-shadow: 0 10px 28px rgba(0, 0, 0, 0.45);
      }
      .core { box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55); }
      .hint { background: color-mix(in srgb, var(--blue) 18%, var(--surface-3)); }
      .wires path { stroke: color-mix(in srgb, var(--ink-muted) 78%, transparent); }
      .wires circle { fill: color-mix(in srgb, var(--ink-muted) 68%, transparent); }
      .missed {
        background: color-mix(in srgb, var(--accent) 15%, var(--surface));
        border-color: color-mix(in srgb, var(--accent) 40%, transparent);
      }
      .missed-item { border-left-color: color-mix(in srgb, var(--accent) 32%, transparent); }
      .missed-mark { background: color-mix(in srgb, var(--accent) 26%, transparent); }
    }

    /* The global reduced-motion rule only caps CSS animation duration, which
       SMIL ignores — the packets have to be removed outright. */
    @media (prefers-reduced-motion: reduce) {
      .packet { display: none; }
    }

    /* ---------- RESPONSIVE ---------- */
    @container (max-width: 1000px) {
      .node-text h3 { font-size: 1.45cqw; }
      .node-text p { font-size: 1.25cqw; }
      .core-title { font-size: 1.5cqw; }
      .core-sub { font-size: 1.15cqw; }
      .hint { font-size: 1.2cqw; }
    }

    /* Below this the ring cannot hold its shape — fall back to a plain grid. */
    @media (max-width: 860px) {
      .diagram { container-type: normal; }
      .canvas { aspect-ratio: auto; display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
      .wires, .hint { display: none; }
      .node, .core {
        position: static; width: auto;
        gap: 12px; border-radius: 14px; padding: 16px;
      }
      .core { grid-column: 1 / -1; order: -1; }
      .node-icon { width: 38px; height: 38px; border-radius: 10px; }
      .node-icon svg { width: 20px; height: 20px; }
      .node-text h3 { font-size: 0.95rem; }
      .node-text p { font-size: 0.84rem; }
      .core-mark svg { width: 24px; height: 24px; }
      .core-title { font-size: 0.95rem; }
      .core-sub { font-size: 0.84rem; }
      .missed { grid-template-columns: 1fr; gap: 20px; padding: 24px; }
      .missed-item { padding-left: 0; border-left: 0; }
    }
    @media (max-width: 560px) {
      .canvas { grid-template-columns: 1fr; }
    }
  `],
})
export class ProblemComponent {
  readonly i18n = inject(I18nService);

  /** How long one packet takes to travel its rail, and the gap between launches. */
  readonly packetDur = '4.2s';
  readonly packetStagger = 0.6;

  /** Source card → cloud edge. Coordinates match the SVG's 1200×540 viewBox. */
  readonly wires = [
    'M220,66 C310,70 360,180 415,240',
    'M220,206 C300,206 350,250 405,272',
    'M220,346 C310,346 360,320 415,305',
    'M980,66 C890,70 840,180 785,240',
    'M980,198 C900,198 850,250 795,272',
    'M980,346 C890,346 840,320 785,305',
    'M550,420 C562,392 576,368 590,345',
  ];

  /**
   * Each wire continued smoothly into the core at (600, 283) with an `S`
   * segment, so a packet's speed and curvature stay continuous as it crosses
   * the cloud and slips behind the centre card.
   */
  readonly motionPaths = [
    'M220,66 C310,70 360,180 415,240 S545,290 600,283',
    'M220,206 C300,206 350,250 405,272 S540,290 600,283',
    'M220,346 C310,346 360,320 415,305 S540,288 600,283',
    'M980,66 C890,70 840,180 785,240 S655,290 600,283',
    'M980,198 C900,198 850,250 795,272 S660,290 600,283',
    'M980,346 C890,346 840,320 785,305 S660,288 600,283',
    'M550,420 C562,392 576,368 590,345 S600,305 600,283',
  ];

  /**
   * Deterministic cloud — a seeded LCG rather than Math.random so the markup is
   * stable between renders and the dots never reshuffle on change detection.
   */
  readonly particles: Particle[] = ProblemComponent.buildCloud();

  private static buildCloud(): Particle[] {
    let seed = 20260826;
    const rand = () => (seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296;

    const points: Particle[] = [];
    for (let i = 0; i < 280; i++) {
      const angle = rand() * Math.PI * 2;
      // Bias toward the centre so the cloud reads dense in the middle.
      const spread = Math.pow(rand(), 0.55);
      points.push({
        cx: +(600 + Math.cos(angle) * spread * 205).toFixed(1),
        cy: +(278 + Math.sin(angle) * spread * 112).toFixed(1),
        r: +(1.3 + rand() * 2).toFixed(2),
        accent: rand() < 0.22,
      });
    }
    return points;
  }
}
