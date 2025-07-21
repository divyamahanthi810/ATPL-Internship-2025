import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-productlist1',
  imports: [CurrencyPipe],
  templateUrl: './productlist1.html',
  styleUrl: './productlist1.css'
})
export class Productlist1 {
  price : number=23000.465
  price1 :number=500.000
  price2 :number=750.5945
}
