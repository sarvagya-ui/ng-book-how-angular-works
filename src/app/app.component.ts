import { Component } from '@angular/core';
import { Product } from "./interfaces/product"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-book-how-angular-works';



  allProducts: Product[] = [
    {
      sku: "MYSHOES",
      name: "Black Running Shoes",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JndW-iSMXL8VQE_1ddVwrYvv_eLcnGpacQ&s",
      department: ["men", "shoes", "Running shoes"],
      price: 3999
    },
    {
      sku: "NOCEHAT",
      name: "a NOCE black hat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWg4ljevwDoeSLL5zkq9yvAfeT7piqY54Lrg&s",
      department: ["women", "accessories", "hats"],
      price: 3999
    }
  ];


  selectedProduct(product: Product) {
    console.log(product);
  }
}
