import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Reactform } from './reactform/reactform';
import { BasicReactform1 } from './basic-reactform1/basic-reactform1';
import { AddValidation2 } from './add-validation2/add-validation2';
import { ResetForm3 } from './reset-form3/reset-form3';
import { Nestedform } from './nestedform/nestedform';
import { Arrayform5 } from './arrayform5/arrayform5';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Reactform,BasicReactform1,AddValidation2,ResetForm3,Nestedform,Arrayform5 ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rforms');
}
