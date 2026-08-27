import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';
const KEY = 'me_theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly _theme = signal<Theme>(this.detect());
  readonly theme = this._theme.asReadonly();

  constructor() {
    effect(() => {
      const t = this._theme();
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', t);
      }
      try { localStorage.setItem(KEY, t); } catch {}
    });
  }

  set(t: Theme) { this._theme.set(t); }
  toggle() { this._theme.set(this._theme() === 'dark' ? 'light' : 'dark'); }

  /**
   * Light is the product default: the site is designed light-first (`:root` in
   * styles.scss is the light palette; dark is opt-in via `[data-theme="dark"]`),
   * so a visitor on a dark-mode OS was being shown the secondary treatment on
   * first visit. The OS preference is deliberately not consulted — only an
   * explicit choice the visitor made with the toggle is honoured.
   */
  private detect(): Theme {
    if (typeof window === 'undefined') return 'light';
    try {
      const stored = localStorage.getItem(KEY) as Theme | null;
      if (stored === 'light' || stored === 'dark') return stored;
    } catch {}
    return 'light';
  }
}
