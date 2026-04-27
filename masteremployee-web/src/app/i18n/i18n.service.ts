import { Injectable, computed, signal, effect } from '@angular/core';
import { Dictionary, Lang, dictionaries } from './translations';

const STORAGE_KEY = 'me_lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly _lang = signal<Lang>(this.detectInitial());

  readonly lang = this._lang.asReadonly();
  readonly t = computed<Dictionary>(() => dictionaries[this._lang()]);

  constructor() {
    effect(() => {
      const lang = this._lang();
      if (typeof window !== 'undefined') {
        try {
          window.localStorage.setItem(STORAGE_KEY, lang);
        } catch {}
        document.documentElement.lang = lang;
      }
    });
  }

  setLang(lang: Lang) {
    this._lang.set(lang);
  }

  toggle() {
    this._lang.set(this._lang() === 'en' ? 'no' : 'en');
  }

  private detectInitial(): Lang {
    if (typeof window === 'undefined') return 'en';
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === 'en' || stored === 'no') return stored;
    } catch {}
    const nav = (navigator?.language || '').toLowerCase();
    if (nav.startsWith('nb') || nav.startsWith('no') || nav.startsWith('nn')) return 'no';
    return 'en';
  }
}
