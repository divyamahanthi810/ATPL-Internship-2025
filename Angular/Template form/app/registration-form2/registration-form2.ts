import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration-form2',
  imports: [FormsModule,CommonModule],
  templateUrl: './registration-form2.html',
  styleUrl: './registration-form2.css'
})
export class RegistrationForm2 {
  validform={
    name:'',
    email:'',
    password:'',
  };
onsubmit(register:any):void{
  if(register.valid){
  console.log("form Submitted",this.validform);
}
else{ 
  alert("Fill Details");
}
}
}
