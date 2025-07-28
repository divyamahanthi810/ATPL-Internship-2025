import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamicdetail',
  imports: [],
  templateUrl: './dynamicdetail.html',
  styleUrl: './dynamicdetail.css'
})
export class Dynamicdetail {
  products = [
    { id: 1, name: 'Product A', description: 'Description for A' },
    { id: 2, name: 'Product B', description: 'Description for B' },
    { id: 3, name: 'Product C', description: 'Description for C' },
  ];
  constructor() {}

}
