import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule,Validators,ValidatorFn,AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-reset-form3',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reset-form3.html',
  styleUrl: './reset-form3.css'
})
export class ResetForm3 {
  resetform:FormGroup;
  constructor(){
    this.resetform=new FormGroup({
      name:new FormControl('', [Validators.required]),
      age:new FormControl('', [Validators.required]),
      email:new FormControl('', [Validators.required,Validators.email]),
      city:new FormControl('', [Validators.required]),
    })
  }
  submit(resetform:any):void{
    if(resetform.valid){
      console.log("All fields are validated");
    }
    else{
      console.log("Fields need to validate enter valid field values");
    }
  }
  form():void{
    this.resetform.reset();
    console.log("Form Reset Successfully")
  }
}
