import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Loginform1 } from './loginform-1/loginform-1';
import { RegistrationForm2 } from './registration-form2/registration-form2';
import { FeedBack3 } from './feed-back3/feed-back3';
import { Drpdwn } from './drpdwn/drpdwn';
import { Formreset5 } from './formreset5/formreset5';
import { Templateref6 } from './templateref6/templateref6';
import { Formsc } from "./formsc/formsc";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loginform1, RegistrationForm2, FeedBack3, Drpdwn, Formreset5, Templateref6, Formsc],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('forms');
}
