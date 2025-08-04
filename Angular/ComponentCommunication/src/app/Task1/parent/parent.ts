import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  template:`<app-child [name]="Studentnames" 
  [name1]="Studentnames[3]"  
  (messageToParent)="receiveFromChild($event)">
  </app-child>
  <p>{{messageFromChild}}</p>`
})
export class Parent {
  Studentnames:string[]=['Divya','Ram','Ganesh','Suresh'];
  messageFromChild = "Message from student";
  receiveFromChild(message: string) {
    this.messageFromChild = message;
  }
}
