import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="site-header" [class.scrolled]="scrolled()">
      <div class="container inner">
        <a class="brand" href="#top" (click)="close()">
          <img src="assets/brand/MASTER-EMPLOYEE_LOGO-02.png" alt="MasterEmployee" />
        </a>
        <nav class="nav" [class.open]="menuOpen()">
          <a (click)="close()" href="#problem">{{ i18n.t().nav.problem }}</a>
          <a (click)="close()" href="#solution">{{ i18n.t().nav.solution }}</a>
          <a (click)="close()" href="#features">{{ i18n.t().nav.features }}</a>
          <a (click)="close()" href="#security">{{ i18n.t().nav.security }}</a>
          <a (click)="close()" href="#pricing">{{ i18n.t().nav.pricing }}</a>
          <a (click)="close()" href="#testimonials">{{ i18n.t().nav.testimonials }}</a>
        </nav>
        <div class="actions">
          <div class="lang-toggle" role="group" aria-label="Language">
            <button
              type="button"
              [class.active]="i18n.lang() === 'en'"
              (click)="i18n.setLang('en')"
              aria-label="English">EN</button>
            <span aria-hidden="true">|</span>
            <button
              type="button"
              [class.active]="i18n.lang() === 'no'"
              (click)="i18n.setLang('no')"
              aria-label="Norsk">NO</button>
          </div>
          <a href="#contact" class="btn btn-primary demo-btn">{{ i18n.t().nav.requestDemo }}</a>
          <button class="hamburger" type="button" (click)="toggle()" [attr.aria-expanded]="menuOpen()" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .site-header {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      padding: 14px 0;
      transition: background 0.25s ease, border-color 0.25s ease, backdrop-filter 0.25s ease;
      border-bottom: 1px solid transparent;
    }
    .site-header.scrolled {
      background: rgba(5, 9, 26, 0.75);
      backdrop-filter: saturate(140%) blur(14px);
      -webkit-backdrop-filter: saturate(140%) blur(14px);
      border-bottom-color: var(--border);
    }
    .inner {
      display: flex;
      align-items: center;
      gap: 24px;
    }
    .brand { flex: 0 0 auto; display: inline-flex; align-items: center; }
    .brand img { height: 34px; width: auto; display: block; }
    .nav {
      display: flex;
      align-items: center;
      gap: 28px;
      margin-left: 28px;
      flex: 1;
    }
    .nav a {
      color: var(--ink-muted);
      font-size: 0.92rem;
      font-weight: 500;
    }
    .nav a:hover { color: var(--ink); }
    .actions {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-left: auto;
    }
    .lang-toggle {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      border-radius: 999px;
      border: 1px solid var(--border);
      background: rgba(255,255,255,0.03);
      font-size: 0.78rem;
      color: var(--ink-muted);
    }
    .lang-toggle button {
      background: transparent;
      border: none;
      color: var(--ink-muted);
      font-weight: 600;
      letter-spacing: 0.08em;
      padding: 2px 6px;
      border-radius: 6px;
    }
    .lang-toggle button.active {
      color: var(--accent);
    }
    .lang-toggle span { color: var(--ink-dim); }
    .demo-btn { padding: 10px 18px; font-size: 0.88rem; }
    .hamburger {
      display: none;
      width: 40px; height: 40px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;
      background: transparent;
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 0;
    }
    .hamburger span {
      width: 18px; height: 2px;
      background: var(--ink);
      border-radius: 2px;
      display: block;
    }

    @media (max-width: 960px) {
      .nav {
        position: fixed;
        top: 64px; left: 0; right: 0;
        background: rgba(5, 9, 26, 0.97);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--border);
        flex-direction: column;
        gap: 0;
        margin: 0;
        padding: 12px 24px 24px;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.25s ease, padding 0.25s ease;
      }
      .nav.open { max-height: 400px; padding: 12px 24px 24px; }
      .nav a { padding: 12px 0; width: 100%; border-bottom: 1px solid var(--border); font-size: 1rem; }
      .hamburger { display: inline-flex; }
      .demo-btn { display: none; }
    }
  `],
})
export class HeaderComponent {
  readonly i18n = inject(I18nService);
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set((window.scrollY || 0) > 8);
  }

  toggle() { this.menuOpen.update(v => !v); }
  close() { this.menuOpen.set(false); }
}
