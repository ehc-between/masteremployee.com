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

  private detect(): Theme {
    if (typeof window === 'undefined') return 'light';
    try {
      const stored = localStorage.getItem(KEY) as Theme | null;
      if (stored === 'light' || stored === 'dark') return stored;
    } catch {}
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
