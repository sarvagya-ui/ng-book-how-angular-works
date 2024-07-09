import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input("productList") products !: Product[];
  @Output() selectedProduct = new EventEmitter<Product>();
  currentItem !: Product;

  // below synatx could also be used when we want to give same name
  // @Input() productList !: Product[];

  constructor() { }

  ngOnInit(): void {
  }

  productClicked(product: Product) {
    this.currentItem = product
    this.selectedProduct.emit(product);
  }

}
