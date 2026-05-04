import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { I18nService } from '../i18n/i18n.service';

@Component({
  selector: 'app-contact-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
  template: `
    @if (!submitted()) {
      <form (submit)="submit($event)" novalidate>
        <label class="field">
          <span>{{ i18n.t().cta.form.name }}</span>
          <input name="name" [(ngModel)]="model.name" required />
        </label>
        <label class="field">
          <span>{{ i18n.t().cta.form.email }}</span>
          <input name="email" type="email" [(ngModel)]="model.email" required />
        </label>
        <label class="field">
          <span>{{ i18n.t().cta.form.company }}</span>
          <input name="company" [(ngModel)]="model.company" />
        </label>
        <label class="field">
          <span>{{ i18n.t().cta.form.message }}</span>
          <textarea name="message" [(ngModel)]="model.message" rows="3"></textarea>
        </label>
        <button type="submit" class="btn btn-primary submit">{{ i18n.t().cta.form.submit }}</button>
      </form>
    } @else {
      <div class="success">
        <div class="success-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4 10-10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <p>{{ i18n.t().cta.form.success }}</p>
      </div>
    }
  `,
  styles: [`
    :host { display: block; }
    form { display: flex; flex-direction: column; gap: 14px; }
    .field { display: flex; flex-direction: column; gap: 6px; }
    .field span { font-size: 0.82rem; color: var(--ink-muted); font-weight: 500; }
    .field input, .field textarea {
      background: var(--surface-2);
      border: 1px solid var(--border-strong);
      color: var(--ink);
      border-radius: 10px;
      padding: 11px 14px;
      font-family: inherit; font-size: 0.95rem;
      transition: border-color 0.2s ease, background 0.2s ease;
    }
    .field input:focus, .field textarea:focus {
      outline: none;
      border-color: var(--accent);
      background: var(--surface);
    }
    .field textarea { resize: vertical; min-height: 80px; }
    .submit { margin-top: 8px; justify-content: center; }
    .success { text-align: center; padding: 40px 20px; }
    .success-icon {
      width: 56px; height: 56px; border-radius: 50%;
      background: color-mix(in srgb, var(--accent) 16%, transparent);
      color: var(--accent);
      display: inline-flex; align-items: center; justify-content: center;
      margin-bottom: 16px;
    }
    .success p { color: var(--ink); font-size: 1.05rem; }
  `],
})
export class ContactFormComponent {
  readonly i18n = inject(I18nService);
  readonly submitted = signal(false);
  model = { name: '', email: '', company: '', message: '' };

  submit(e: Event) {
    e.preventDefault();
    this.submitted.set(true);
  }
}
