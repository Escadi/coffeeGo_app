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



  getAllProduct() {
    this.productService.getProduct().subscribe(
      {
        next: (data: any) =>
          this.product = data
      });
  }

}
