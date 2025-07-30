import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Employee } from '../../interfaces/employee';
import { RouterLink } from '@angular/router';
import { EmployeeDetails } from '../../services/employee-details';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule, RouterLink],
  templateUrl: './employee-form.html',
  standalone: true,
  styleUrl: './employee-form.scss',
})
export class EmployeeForm {
  employeeInitialData: Employee = {
    employeeId: 0,
    email: '',
    employeeName: '',
    department: '',
  };
  employeeDetails: Employee = this.employeeInitialData;
  constructor(private employeeDetailsService: EmployeeDetails) {}

  onSubmit(formData: NgForm) {
    console.log('Form submitted:', formData.value);
    if (
      this.employeeDetailsService.verifyIfUserExists(formData.value.employeeId)
    ) {
      alert('Employee with this ID already exists!');
      return;
    } else {
      this.employeeDetailsService.addUserData(formData.value);
      alert('Employee added successfully!');

      formData.resetForm();
      this.employeeDetails = this.employeeInitialData;
    }
  }
}
