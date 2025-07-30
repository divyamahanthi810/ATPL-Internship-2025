import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product} from '../product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 @Component({
  selector: 'app-product-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './product-component.component.html',
  styleUrl: './product-component.component.css'
})
export class ProductComponentComponent {
  products: Product[] = [];
  newProduct: Product = { name: '', cost: 0 };
  message: string = '';
  constructor(private productService:ProductServiceService){}
  ngOnInit(){
    this.getAllProducts();
  }
  getAllProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.message = 'Products loaded successfully';
      },
      error: () => this.message = 'Failed to load products'
    });
  }

  addProduct() {
    this.productService.addProduct(this.newProduct).subscribe({
      next: (data) => {
        this.products.push(data);
        this.message = 'Product added successfully';
      },
      error: () => this.message = 'Failed to add product'
    });
  }

  updateProduct(product: Product) {
    this.productService.updateProduct(product).subscribe({
      next: () => this.message = 'Product updated successfully',
      error: () => this.message = 'Failed to update product'
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.products = this.products.filter(p => p.id !== id);
        this.message = 'Product deleted successfully';
      },
      error: () => this.message = 'Failed to delete product'
    });
  }

}
