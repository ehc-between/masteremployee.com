import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { ProblemComponent } from './components/problem.component';
import { StepsComponent } from './components/steps.component';
import { ContactFormComponent } from './components/contact-form.component';
import { RevealDirective } from './reveal.directive';
import { FitLinesDirective } from './fit-lines.directive';
import { I18nService } from './i18n/i18n.service';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ProblemComponent,
    StepsComponent,
    ContactFormComponent,
    RevealDirective,
    FitLinesDirective,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly i18n = inject(I18nService);
  readonly year = new Date().getFullYear();
  readonly activeTab = signal<string>('churn');

  /**
   * Fraction of the hero copy column the headline is fitted to. Also drives
   * the description's max-width so the paragraph can never run wider than the
   * headline stack above it.
   */
  readonly titleFit = 0.7;
}
