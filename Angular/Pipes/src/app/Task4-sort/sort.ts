import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sort',
  imports: [FormsModule,CommonModule],
  templateUrl: './sort.html',
  styleUrl: './sort.css'
})
export class Sort {
  prices: number[] = [250.59, 500.42, 10.00, 7.59, 124.90, 9.80, 300];
  constructor() {
    this.sortPrices();
  }
  sortPrices() {
    this.prices.sort((a, b) => a - b);
  } 
}
