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
  total: number = 0

  constructor(
    private detailsOrderService: CoffeeGoServices,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDetailsOrders();
  }

   ionViewWillEnter() {
    this.getDetailsOrders();
  }

    getDetailsOrders() {
    this.detailsOrderService.getDetailsOrder().subscribe({
      next: (data: any) => {
        this.product = data;

        // Recalcular subtotales por si vienen sin calcular
        this.product.forEach((p: any) => {
          p.subtotal = p.stock * p.product.priceProduct;
        });

        this.calculateTotal();
      }
    });
  }


  increment(index: number) {
    this.product[index].stock++;
    this.updateSubtotal(index);
    this.calculateTotal();
  }

  decrement(index: number) {
    if (this.product[index].stock > 0) {
      this.product[index].stock--;
      this.updateSubtotal(index);
      this.calculateTotal();
    }
  }

  updateSubtotal(index: number) {
    const p = this.product[index];
    p.subtotal = p.stock * p.product.priceProduct;
  }

  calculateTotal() {
    this.total = this.product.reduce((sum: number, item: any) => {
      return sum + item.subtotal;
    },0);
  }

}
