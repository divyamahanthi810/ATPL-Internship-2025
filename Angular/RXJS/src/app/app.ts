import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Debounce } from './Task1/debounce/debounce';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Debounce],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RXJS');
}
