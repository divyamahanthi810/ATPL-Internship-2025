import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parent } from './Task1/parent/parent';
import { Loginforms } from './Task5-6/loginforms/loginforms';
import { Form } from '@angular/forms';
import { form } from './Task3-4/form/form';
@Component({
  selector: 'app-root',
  imports: [Parent,Loginforms,form],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ComponentCommunication');
isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

}
