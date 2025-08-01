import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponentComponent } from './product-component/product-component.component';
import { UserComponent } from './Task2/user/user.component';
import { InterpectorComponent } from './Task3/interpector/interpector.component';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './Task4/login/login.component';
import { Product1Component } from './Task5/product1/product1.component';
import { User1Component } from './Task5/user1/user1.component';
import { LoginpageComponent } from './JWT/loginpage/loginpage.component';
import { Data3Component } from './JWT/data3/data3.component';
@Component({
  selector: 'app-root',
  imports: [Data3Component,LoginpageComponent,InterpectorComponent,Product1Component,User1Component,ProductComponentComponent,UserComponent,FormsModule,CommonModule,RouterOutlet,LoginComponent],
  template:`<app-product1></app-product1>
    <hr>
    <app-user1></app-user1>`,
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
