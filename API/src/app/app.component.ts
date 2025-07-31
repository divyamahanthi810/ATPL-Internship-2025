import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponentComponent } from './product-component/product-component.component';
import { UserComponent } from './Task2/user/user.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent,FormsModule,CommonModule,RouterOutlet,ProductComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'API';
}
