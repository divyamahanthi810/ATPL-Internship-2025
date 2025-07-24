import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-login-page2',
  imports: [MatCardModule,MatIconModule,MatButtonModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule],
  templateUrl: './login-page2.html',
  styleUrl: './login-page2.css'
})
export class LoginPage2 {
  form:FormGroup;

constructor(){
  this.form=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  });
}
onsubmit(form:any):void{
  if(this.form.valid){
  console.log("Form Submitted");
}
  }
}
