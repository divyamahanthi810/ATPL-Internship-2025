import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule,Validators,ValidatorFn,AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-add-validation2',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-validation2.html',
  styleUrl: './add-validation2.css'
})
export class AddValidation2 {
  validate:FormGroup;
  constructor(){
    this.validate=new FormGroup({
      name:new FormControl('', [Validators.required]),
      age:new FormControl('', [Validators.required]),
      email:new FormControl('', [Validators.required,Validators.email]),
      city:new FormControl('', [Validators.required]),
    })
  }
  submit(validate:any):void{
    if(validate.valid){
      console.log("All fields are validated");
    }
    else{
      console.log("Fields need to validate enter valid field values");
    }
  }
}
