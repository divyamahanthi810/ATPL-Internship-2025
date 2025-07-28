import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { ProductList } from './Task2/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [ProductList,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Routing');
}
