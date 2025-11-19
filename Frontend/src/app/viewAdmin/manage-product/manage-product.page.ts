import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CoffeeGoServices } from 'src/app/services/coffee-go-services';


@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.page.html',
  styleUrls: ['./manage-product.page.scss'],
  standalone: false
})
export class ManageProductPage implements OnInit {

  product: any = [];

  constructor(
    private productService: CoffeeGoServices,
    private router: Router,
    private alertController: AlertController
  ) { }


  ngOnInit() {

  }

  ionViewWillEnter() {
    this.getAllProduct();
  }
   /**
   *  --------------------------------------------------------------
   * |                            ALERT                            |
   *  --------------------------------------------------------------
   */
  async alertAdd() {
  const alert = await this.alertController.create({
    header: 'Éxito',
    message: 'Se te ha añadido correctamente el pedido',
    buttons: [
      {
        text: 'OK',
        handler: async () => {
          
        }
      }
    ]
  });
  await alert.present();
}



  /**
   *  --------------------------------------------------------------
   * |                     GET ALL PRODUCTO IN LIST                 |
   *  --------------------------------------------------------------
   */
  getAllProduct() {
    this.productService.getProduct().subscribe(
      {
        next: (data: any) =>
          this.product = data
      });
  }
  
  /**
   *  --------------------------------------------------------------
   * |                CREATE DETAILSORDER TO PRODUCT                |
   *  --------------------------------------------------------------
   */

  createOrder(product: any){
    const myOrder = {
      idProduct: product.id,
      stock: 1,
      idClient: 2,
      subtotal: product.priceProduct
    };
    this.productService.addDetailsOrder(myOrder).subscribe({
      next: () => {
        console.log("myOrder")
        this.alertAdd();
      }
    });
  }




  /**
   *  --------------------------------------------------------------
   * |                      OPENS VIEWS APP                         |
   *  --------------------------------------------------------------
   */








}
