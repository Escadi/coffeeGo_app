import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoffeeGoServices } from 'src/app/services/coffee-go-services';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.page.html',
  styleUrls: ['./manage-order.page.scss'],
  standalone: false
})
export class ManageOrderPage implements OnInit {

  product: any = []



  constructor(
    private detailsOrderService: CoffeeGoServices,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDetailsOrders();
  }


  getDetailsOrders() {
    this.detailsOrderService.getDetailsOrder().subscribe(
      {
        next: (data: any) =>
          this.product = data

      });
  }


  increment(index: number) {
    this.product[index].quantity++;
  }

  decrement(index: number) {
    if (this.product[index].quantity > 0) {
      this.product[index].quantity--;
    }
  }

}
