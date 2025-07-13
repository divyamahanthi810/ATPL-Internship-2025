import { Component } from '@angular/core';

@Component({
  selector: 'app-user-greeting',
  standalone: false,
  templateUrl: './user-greeting.component.html',
  styleUrl: './user-greeting.component.css'
})
export class UserGreetingComponent {
  name: string = '';
  age: number | null = null;

  nameError: string = '';
  ageError: string = '';

  handleSubmit() {
    this.nameError = '';
    this.ageError = '';

    let isValid = true;

    if (!this.name.trim()) {
      this.nameError = 'Name is required.';
      isValid = false;
    }

    if (this.age === null || isNaN(this.age) || this.age <= 0) {
      this.ageError = 'Age must be a positive number.';
      isValid = false;
    }

    if (isValid) {
      alert(`Hello, ${this.name}! You are ${this.age} years old.`);
    }
  }
}
