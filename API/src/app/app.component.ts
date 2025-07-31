import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponentComponent } from './product-component/product-component.component';
import { UserComponent } from './Task2/user/user.component';
import { InterpectorComponent } from './Task3/interpector/interpector.component';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './Task4/login/login.component';
@Component({
  selector: 'app-root',
  imports: [InterpectorComponent,ProductComponentComponent,UserComponent,FormsModule,CommonModule,RouterOutlet,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'API';
  constructor(public http: HttpClient) {}
  public ping() {
    this.http.get('https://example.com/api/things')
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
}
