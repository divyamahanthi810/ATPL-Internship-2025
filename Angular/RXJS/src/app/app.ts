import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Debounce } from './Task1/debounce/debounce';
import { Assign2 } from './Task2/assign2/assign2';
import { Assign3 } from './Task3/assign3/assign3';
import { Assign4 } from './Task4/assign4/assign4';
import { Assign5 } from './Task5/assign5/assign5';
import { Assign6 } from './Task6/assign6/assign6';

@Component({
  selector: 'app-root',
  imports: [Assign5,Assign6,Assign4,RouterOutlet,Debounce,Assign2,Assign3],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RXJS');
}
