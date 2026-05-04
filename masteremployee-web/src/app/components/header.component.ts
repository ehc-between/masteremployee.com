import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="site-header" [class.scrolled]="scrolled()">
      <div class="container inner">
        <a class="brand" href="#top" (click)="close()">
          <img src="assets/brand/logo-orange-transparent.png" alt="MasterEmployee" />
        </a>
        <nav class="nav" [class.open]="menuOpen()">
          <a (click)="close()" href="#problem">{{ i18n.t().nav.problem }}</a>
          <a (click)="close()" href="#solution">{{ i18n.t().nav.solution }}</a>
          <a (click)="close()" href="#use-cases">{{ i18n.t().nav.useCases }}</a>
          <a (click)="close()" href="#security">{{ i18n.t().nav.security }}</a>
          <a (click)="close()" href="#pricing">{{ i18n.t().nav.pricing }}</a>
          <a (click)="close()" href="#faq">{{ i18n.t().nav.faq }}</a>
        </nav>
        <div class="actions">
          <button class="theme-btn" type="button" (click)="theme.toggle()" [attr.aria-label]="'Toggle theme'">
            @if (theme.theme() === 'dark') {
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            } @else {
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
            }
          </button>
          <div class="lang-toggle" role="group" aria-label="Language">
            <button type="button" [class.active]="i18n.lang() === 'en'" (click)="i18n.setLang('en')">EN</button>
            <span aria-hidden="true">·</span>
            <button type="button" [class.active]="i18n.lang() === 'no'" (click)="i18n.setLang('no')">NO</button>
          </div>
          <a href="#contact" class="btn btn-primary demo-btn">{{ i18n.t().nav.bookDemo }}</a>
          <button class="hamburger" type="button" (click)="toggle()" [attr.aria-expanded]="menuOpen()" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .site-header {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      padding: 14px 0;
      background: color-mix(in srgb, var(--bg) 92%, transparent);
      backdrop-filter: saturate(140%) blur(14px);
      -webkit-backdrop-filter: saturate(140%) blur(14px);
      border-bottom: 1px solid var(--border);
      transition: background 0.2s ease, border-color 0.2s ease;
    }
    .site-header.scrolled {
      background: color-mix(in srgb, var(--bg) 96%, transparent);
    }
    .inner { display: flex; align-items: center; gap: 24px; }
    .brand { flex: 0 0 auto; display: inline-flex; align-items: center; }
    .brand img { height: 64px; width: auto; display: block; }
    .nav { display: flex; align-items: center; gap: 26px; margin-left: 24px; flex: 1; }
    .nav a { color: var(--ink-muted); font-size: 0.9rem; font-weight: 500; }
    .nav a:hover { color: var(--ink); }
    .actions { display: flex; align-items: center; gap: 12px; margin-left: auto; }
    .theme-btn {
      width: 36px; height: 36px; border-radius: 50%;
      background: transparent; border: 1px solid var(--border-strong);
      color: var(--ink); display: inline-flex; align-items: center; justify-content: center;
      transition: background 0.2s ease, border-color 0.2s ease;
    }
    .theme-btn:hover { background: var(--surface-2); border-color: var(--ink); }
    .lang-toggle {
      display: inline-flex; align-items: center; gap: 4px;
      padding: 4px 10px; border-radius: 999px;
      border: 1px solid var(--border-strong); background: transparent;
      font-size: 0.75rem; color: var(--ink-muted);
    }
    .lang-toggle button {
      background: transparent; border: 0; color: var(--ink-muted); font-weight: 600;
      letter-spacing: 0.06em; padding: 2px 4px; border-radius: 4px;
    }
    .lang-toggle button.active { color: var(--accent); }
    .lang-toggle span { color: var(--ink-dim); }
    .demo-btn { padding: 9px 16px; font-size: 0.85rem; }
    .hamburger {
      display: none; width: 38px; height: 38px;
      flex-direction: column; justify-content: center; align-items: center; gap: 4px;
      background: transparent; border: 1px solid var(--border-strong); border-radius: 10px; padding: 0;
    }
    .hamburger span { width: 16px; height: 2px; background: var(--ink); border-radius: 2px; display: block; }
    @media (max-width: 1020px) {
      .nav {
        position: fixed; top: 64px; left: 0; right: 0;
        background: var(--bg); border-bottom: 1px solid var(--border);
        flex-direction: column; gap: 0; margin: 0; padding: 0 24px;
        max-height: 0; overflow: hidden; transition: max-height 0.25s ease, padding 0.25s ease;
      }
      .nav.open { max-height: 460px; padding: 12px 24px 24px; }
      .nav a { padding: 14px 0; width: 100%; border-bottom: 1px solid var(--border); font-size: 1rem; }
      .hamburger { display: inline-flex; }
      .demo-btn { display: none; }
    }
    @media (max-width: 480px) {
      .lang-toggle { display: none; }
    }
  `],
})
export class HeaderComponent {
  readonly i18n = inject(I18nService);
  readonly theme = inject(ThemeService);
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set((window.scrollY || 0) > 8); }

  toggle() { this.menuOpen.update(v => !v); }
  close() { this.menuOpen.set(false); }
}
