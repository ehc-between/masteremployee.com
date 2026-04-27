import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { I18nService } from '../i18n/i18n.service';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (submitted()) {
      <div class="success">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="m5 12 4 4 10-10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p>{{ i18n.t().cta.form.success }}</p>
      </div>
    } @else {
      <form (ngSubmit)="submit()" #f="ngForm" novalidate>
        <div class="row">
          <label>
            <span>{{ i18n.t().cta.form.name }}</span>
            <input type="text" name="name" [(ngModel)]="model.name" required />
          </label>
          <label>
            <span>{{ i18n.t().cta.form.email }}</span>
            <input type="email" name="email" [(ngModel)]="model.email" required />
          </label>
        </div>
        <label class="full">
          <span>{{ i18n.t().cta.form.company }}</span>
          <input type="text" name="company" [(ngModel)]="model.company" />
        </label>
        <label class="full">
          <span>{{ i18n.t().cta.form.message }}</span>
          <textarea name="message" rows="4" [(ngModel)]="model.message"></textarea>
        </label>
        <button type="submit" class="btn btn-primary" [disabled]="!f.form.valid">
          {{ i18n.t().cta.form.submit }}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </form>
    }
  `,
  styles: [`
    form {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .row {
      display: grid;
      gap: 14px;
    }
    @media (min-width: 600px) {
      .row { grid-template-columns: 1fr 1fr; }
    }
    label {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    label span {
      font-size: 0.82rem;
      color: var(--ink-muted);
      font-weight: 500;
    }
    input, textarea {
      font-family: inherit;
      font-size: 0.98rem;
      background: rgba(255,255,255,0.03);
      border: 1px solid var(--border-strong);
      border-radius: 12px;
      padding: 12px 14px;
      color: var(--ink);
      transition: border-color 0.2s ease, background 0.2s ease;
      resize: vertical;
    }
    input:focus, textarea:focus {
      outline: none;
      border-color: var(--accent);
      background: rgba(77,240,198,0.05);
    }
    button[disabled] { opacity: 0.55; cursor: not-allowed; transform: none; box-shadow: none; }
    button { margin-top: 6px; align-self: flex-start; }
    .success {
      display: flex;
      align-items: center;
      gap: 14px;
      color: var(--accent);
      background: rgba(77,240,198,0.08);
      border: 1px solid rgba(77,240,198,0.3);
      border-radius: 16px;
      padding: 20px;
      font-weight: 500;
    }
    .success p { margin: 0; color: var(--ink); }
  `],
})
export class ContactFormComponent {
  readonly i18n = inject(I18nService);
  readonly submitted = signal(false);
  model = { name: '', email: '', company: '', message: '' };

  submit() {
    this.submitted.set(true);
  }
}
