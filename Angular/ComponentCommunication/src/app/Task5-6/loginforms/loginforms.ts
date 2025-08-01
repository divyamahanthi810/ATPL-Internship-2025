import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginforms',
  imports: [ReactiveFormsModule],
  templateUrl: './loginforms.html',
  styleUrl: './loginforms.css'
})
export class Loginforms {
  userform:FormGroup;
  constructor(){
  this.userform=new FormGroup({
    name:new FormControl(''),
    age:new FormControl(''),
  });
  }
  Submit(userform:any):void{
    if(userform.valid){
      console.log("form submitted",this.userform.value);
      alert(`welcome ${this.userform.value.name}`)
    }
  }

}
