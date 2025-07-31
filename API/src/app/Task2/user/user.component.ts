import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.module';
import { ErrorComponent } from '../error/error.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [ErrorComponent,CommonModule,FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user!: User;
  errorMessage = '';

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    this.userService.getUserProfile().subscribe({
      next: (data) => {
        this.user = data;
        this.errorMessage = '';
        alert('User loaded successfully');
      },
      error: (err) => {
        alert('Failed to load user profile.');
      }
    });
  }
}