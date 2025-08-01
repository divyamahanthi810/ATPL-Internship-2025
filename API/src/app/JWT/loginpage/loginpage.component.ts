import { Component } from '@angular/core';
import { AuthoService } from '../autho.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  imports: [CommonModule,FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {


  username = '';
  password = '';
  message = '';

  constructor(private authService: AuthoService) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.message = 'Login Successful!';
    } else {
      this.message = 'Login Failed!';
    }
  }
}
