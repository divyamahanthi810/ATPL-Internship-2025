import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loginform-1',
  imports: [FormsModule,CommonModule ],
  templateUrl: './loginform-1.html',
  styleUrl: './loginform-1.css'
})
export class Loginform1 {
  login={
    name:'',
    password:'',
  };
onsubmit(loginform:any):void{
  if(loginform.valid){
  console.log("form Submitted",this.login);
}
}
}
