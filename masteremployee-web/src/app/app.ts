import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { TestimonialsComponent } from './components/testimonials.component';
import { ContactFormComponent } from './components/contact-form.component';
import { I18nService } from './i18n/i18n.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TestimonialsComponent, ContactFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly i18n = inject(I18nService);
  readonly year = new Date().getFullYear();
}
