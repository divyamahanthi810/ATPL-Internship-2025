
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginforms',
  imports: [FormsModule ,CommonModule,ReactiveFormsModule],
  templateUrl: './loginforms.html',
  styleUrl: './loginforms.css'
})
export class Loginforms implements OnInit {
  username: string = '';
  password: string = '';
  loggedInUser: string | null = null;
  error: string = '';

  ngOnInit(): void {
    this.loggedInUser = sessionStorage.getItem('username');
  }
  login(): void {
    this.error = '';

    if (!this.username.trim() || !this.password.trim()) {
      this.error = 'Username and Password are required';
      return;
    }    
    if (this.password === 'admin123') {
      sessionStorage.setItem('username', this.username);
      this.loggedInUser = this.username;
      this.username = '';
      this.password = '';
    } else {
      this.error = 'Invalid password';
    }
  }
  logout(): void {
    sessionStorage.removeItem('username');
    this.loggedInUser = null;
    this.error = '';
  }
}
