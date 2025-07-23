import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule,Validators,ValidatorFn,AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-basic-reactform1',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './basic-reactform1.html',
  styleUrl: './basic-reactform1.css'
})
export class BasicReactform1 {
  basicform:FormGroup;
  constructor(){
  this.basicform=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(5)]),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  });
  }
  onsubmit(basicform:any):void{
    if(basicform.valid){
      console.log("form submitted",this.basicform.value);
    }
  }

  }
