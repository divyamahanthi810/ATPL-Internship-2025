import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponentComponent } from './product-component/product-component.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule,RouterOutlet,ProductComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'API';
}
