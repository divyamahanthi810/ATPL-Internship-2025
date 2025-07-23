import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormGroup,FormControl,Validators,ValidatorFn,AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactform',
  imports: [ReactiveFormsModule,JsonPipe,CommonModule ],
  templateUrl: './reactform.html',
  styleUrl: './reactform.css'
})
export class Reactform {
  userForm!: FormGroup;
    countries = ['United States', 'India', 'United Kingdom', 'Australia'];

    ngOnInit() {
        this.userForm = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(3)]),
            email: new FormControl('', [Validators.required, Validators.email]),
            age: new FormControl('', [Validators.required, Validators.min(18)]),
            phoneNumber: new FormControl('', [Validators.required,
            Validators.pattern(/^\d{10}$/)]), 
            // Example pattern for a 10-digit phone number
            address: new FormControl('', [Validators.required]),
            country: new FormControl('', [Validators.required]),
            dateOfBirth: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
            confirmPassword: new FormControl('', [Validators.required])
        }, { validators: this.passwordsMatch() });
    }

    passwordsMatch(): ValidatorFn {
        return (group: AbstractControl): { [key: string]: any } | null => {
            const password = group.get('password')?.value;
            const confirmPassword = group.get('confirmPassword')?.value;
            return password === confirmPassword ? null : { passwordsMismatch: true };
        };
    }

    onSubmit() {
        if (this.userForm.valid) {
            console.log('Form Submitted!', this.userForm.value);
        } else {
            console.log('Form not valid');
        }
    }

}
