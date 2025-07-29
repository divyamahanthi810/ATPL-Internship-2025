import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prodcut-list',
  imports: [CommonModule ],
  templateUrl: './prodcut-list.component.html',
  styleUrl: './prodcut-list.component.css'
})
export class ProdcutListComponent {
products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Mobile' },
    { id: 3, name: 'Tablet' }
  ];

  constructor(private router: Router) {}

  goToProduct(productId: number) {
    this.router.navigate(['/products', productId]);
  }
}
