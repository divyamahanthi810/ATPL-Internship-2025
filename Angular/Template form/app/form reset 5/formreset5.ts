import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formreset5',
  imports: [FormsModule,CommonModule],
  templateUrl: './formreset5.html',
  styleUrl: './formreset5.css'
})
export class Formreset5 {
user={
  name:'',
  email:'',
  address:'',
  mobile:''
};
resetbtn(reset:any):void{
  if(reset.valid)
  {
    alert("successful");
  }
}
}
