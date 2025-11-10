import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoffeeGoServices } from 'src/app/services/coffee-go-services';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
  standalone:false
})
export class OrderPage implements OnInit {

  constructor(
    private orderService : CoffeeGoServices,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
