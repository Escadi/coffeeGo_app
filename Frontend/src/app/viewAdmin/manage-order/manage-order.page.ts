import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.page.html',
  styleUrls: ['./manage-order.page.scss'],
  standalone:false
})
export class ManageOrderPage implements OnInit {
  product: any = []

  constructor() { }

  ngOnInit() {
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
