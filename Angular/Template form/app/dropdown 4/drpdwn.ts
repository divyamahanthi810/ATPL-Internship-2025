import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drpdwn',
  imports: [FormsModule,CommonModule],
  templateUrl: './drpdwn.html',
  styleUrl: './drpdwn.css'
})
export class Drpdwn {
drpdwn={
  name:'',
  country:''
};
onsubmit(drp:any):void{
  console.log("You selected Country",this.drpdwn.country)
}

}
