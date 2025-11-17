import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoffeeGoServices } from 'src/app/services/coffee-go-services';

@Component({
  selector: 'app-list-update',
  templateUrl: './list-update.page.html',
  styleUrls: ['./list-update.page.scss'],
  standalone:false
})
export class ListUpdatePage implements OnInit {


  product: any = []

  constructor(
    private router: Router,
    private productService: CoffeeGoServices
  ) { }

  ngOnInit() {
    this.getAllProduct();
  }


  getAllProduct(){
    this.productService.getProduct().subscribe({
      next: (data:any) =>
        this.product = data
    });
  }

  btnBack(){
    this.router.navigateByUrl("/profile")

  }

}
