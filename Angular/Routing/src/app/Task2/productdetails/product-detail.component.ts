import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  productId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
}
}
