import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule,Validators} from '@angular/forms';

@Component({
  selector: 'app-nestedform',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './nestedform.html',
  styleUrl: './nestedform.css'
})
export class Nestedform {
  nestedform:FormGroup;
  constructor(){
  this.nestedform = new FormGroup({
      firstName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormGroup({
      street: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      zipCode: new FormControl('',Validators.required),
    })
  });
}

  onSubmit(): void {
    if(this.nestedform.valid){
    console.log(this.nestedform.value);
    }
    else{
      console.log("invalid");
    }
  }
}
