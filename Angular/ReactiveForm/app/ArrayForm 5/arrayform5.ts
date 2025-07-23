import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormArray,FormBuilder,FormGroup, ReactiveFormsModule,Validators,ValidatorFn,AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-arrayform5',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './arrayform5.html',
  styleUrl: './arrayform5.css'
})
export class Arrayform5 {
  form: FormGroup;

    constructor() {
        this.form = new FormGroup({
            phones: new FormArray([new FormControl('',[Validators.required,Validators.maxLength(10)])])
        });
    }

    get phones() {
        return this.form.get('phones') as FormArray;
    }

    addItem() {
        this.phones.push(new FormControl('',Validators.required));
    }

    removeItem(index: number) {
        this.phones.removeAt(index);
    }
    onsubmit(form:any):void{
      if(form.valid)
      {
        console.log("Entered numbers",this.form.value);
      }
    }
    }

}
