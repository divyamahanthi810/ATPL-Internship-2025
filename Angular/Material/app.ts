import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Setup1 } from './setup1/setup1';
import { LoginPage2 } from './login-page2/login-page2';
import { Dialog4 } from './dialog4/dialog4';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Setup1,LoginPage2,Dialog4],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('material-ui-demo');
}
