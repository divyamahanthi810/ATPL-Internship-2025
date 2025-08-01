import { Component } from '@angular/core';
import { ApisService} from '../apis.service';
 import { Product } from '../Prod.model';
 import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product1',
  imports: [CommonModule],
  templateUrl: './product1.component.html',
  styleUrl: './product1.component.css'
})
export class Product1Component {
  products: Product[] = [];
  private url = 'http://localhost:3000/product';

  constructor(private api: ApisService<Product>) {}

  ngOnInit() {
    this.api.getAll(this.url).subscribe(data => this.products = data);
  }
}
