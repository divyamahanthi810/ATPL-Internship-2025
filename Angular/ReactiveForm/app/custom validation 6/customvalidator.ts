import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule,Validators,ValidatorFn,AbstractControl} from '@angular/forms';


@Component({
  selector: 'app-customvalidator',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './customvalidator.html',
  styleUrl: './customvalidator.css'
})
export class Customvalidator {
  userForm!: FormGroup;
    ngOnInit() {
        this.userForm = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(3)]),
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
