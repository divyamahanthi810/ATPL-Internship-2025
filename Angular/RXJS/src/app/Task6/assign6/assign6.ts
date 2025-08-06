import { Component } from '@angular/core';
import { mergeMap,Subject,of,delay } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-assign6',
  imports: [CommonModule,FormsModule],
  templateUrl: './assign6.html',
  styleUrl: './assign6.css'
})
export class Assign6 {
  products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Tablet' }
  ];

  productDetails: string[] = [];
  detailRequests$ = new Subject<number>();

  constructor() {
    this.detailRequests$.pipe(
      mergeMap(id => this.fetchProductDetail(id))
    ).subscribe(detail => {
      this.productDetails.push(detail);
    });
  }

  getProductDetails(id: number) {
    this.detailRequests$.next(id);
  }

  fetchProductDetail(id: number) {
    const detail = `Details for product ${id}`;
    return of(detail).pipe(delay(1000));
  }
}
