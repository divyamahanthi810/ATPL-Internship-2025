
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-templateref6',
  imports: [FormsModule,CommonModule],
  templateUrl: './templateref6.html',
  styleUrl: './templateref6.css'
})
export class Templateref6 {
  Details={
    name:'',
    age:'',
    mobile:''
  }
  tempbtn(userForm:any):void{
    if(userForm.valid){
      alert("Ok");

    }
  }

}
