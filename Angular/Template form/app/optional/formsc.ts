import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-formsc',
  imports: [FormsModule,CommonModule],
  templateUrl: './formsc.html',
  styleUrl: './formsc.css'
})
export class Formsc {

  userDetails = {
    name: '',
    email: '',
    gender: '',
    Course: '',
    Comments: ''
  };

  submitted = false;

  submitForm(form: any) {
    if (form.valid) {
      this.submitted = true;
      console.log('Form Submitted:', this.userDetails);
    }
  }

  resetForm() {
    this.userDetails = {
      name: '',
      email: '',
      gender: '',
      Course: '',
      Comments: ''
    };
    this.submitted = false;
  }
}
