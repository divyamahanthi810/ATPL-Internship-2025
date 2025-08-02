import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parent } from './Task1/parent/parent';
import { Loginforms } from './Task5-6/loginforms/loginforms';

@Component({
  selector: 'app-root',
  imports: [Parent,Loginforms],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ComponentCommunication');
}
