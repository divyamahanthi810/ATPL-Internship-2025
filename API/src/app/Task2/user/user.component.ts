import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user',
  imports: [MatSnackBarModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user!: User;
  errorMessage = '';

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBarModule
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    this.userService.getUserProfile().subscribe({
      next: (data) => {
        this.user = data;
        this.errorMessage = '';
        this.snackBar.open('User loaded successfully', 'Close', { duration: 2000 });
      },
      error: (err) => {
        this.errorMessage = 'Failed to load user profile.';
        this.snackBar.open(this.errorMessage, 'Close', { duration: 3000 });
      }
    });
  }
}