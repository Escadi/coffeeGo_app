import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { CoffeeGoServices } from 'src/app/services/coffee-go-services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  standalone: false
})
export class ProductListPage implements OnInit {

  product: any = [];

  constructor(
    private productService: CoffeeGoServices,
  ) { }

  ngOnInit() {
    this.getAllProduct();
  }


  increment(index: number) {
    this.product[index].quantity++;
  }

  decrement(index: number) {
    if (this.product[index].quantity > 0) {
      this.product[index].quantity--;
    }
  }



  getAllProduct() {
    this.productService.getProduct().subscribe({
      next: (data: any) => {
        this.product = data.map((p: any) => ({
          ...p,
          quantity: 0
        }));
      },
      error: (err) => console.error(err)
    });
  }

}
