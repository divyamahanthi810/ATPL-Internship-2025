import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports:[CommonModule ],
  template:`<h1>Task1</h1>
            <p>List of all studentnames</p>
            <ul>
            <li *ngFor='let item of name'>{{item}}</li>
            </ul>
            <p>Name of specified student</p>
            <li>{{name1}}</li>
            <h1>Task2</h1>
            <button (click)="sendToParent()">Select Student</button>

            `,
})
export class Child {
@Input() name:string[]=[];
@Input() name1:string="";
@Output() messageToParent = new EventEmitter<string>();

  sendToParent() {
    this.messageToParent.emit(`Student selected is ${this.name1}!`);
  }
}
