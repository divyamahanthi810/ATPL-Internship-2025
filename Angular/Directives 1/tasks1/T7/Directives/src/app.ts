import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Faq } from './faq/faq';
import { AppHasRole } from './directives/app-has-role';
import { AppHighlightOnHover } from './directives/app-highlight-on-hover';
import { AppToggleAnswer } from './directives/app-toggle-answer';
@Component({
  selector: 'app-root',
  imports: [Faq],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('b2');
}
