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
    ngOnInit() {
        this.userForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            lname:new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            address: new FormGroup({
            street: new FormControl('',Validators.required),
            city: new FormControl('',Validators.required),
          zipCode: new FormControl('', [Validators.required,Validators.pattern(/^\d{6}$/)])
    }),
            phones: new FormArray([new FormControl('',[Validators.required,Validators.maxLength(10)])])
        });
    }

    get phones() {
        return this.userForm.get('phones') as FormArray;
    }

    addItem() {
        this.phones.push(new FormControl('',Validators.required));
    }

    removeItem(index: number) {
        this.phones.removeAt(index);
    }

    onSubmit() {
        if (this.userForm.valid) {
            console.log('Form Submitted!', this.userForm.value);
        } else {
            console.log('Form not valid');
        }
    }

}
