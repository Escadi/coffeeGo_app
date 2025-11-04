import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoffeeGoServices } from 'src/app/services/coffee-go-services';
import { MenuController } from '@ionic/angular';


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
    private myMenu: MenuController,
    private router: Router
  ) { }


  ngOnInit() {
  }


  ionViewWillEnter() {
    this.getAllProduct();
  }


  /**
   *  --------------------------------------------------------------
   * |                     CALL APIREST PRODUCT                     |
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
   * |                      OPENS VIEWS APP                         |
   *  --------------------------------------------------------------
   */

  openMenu() {
    this.myMenu.open('mainMenu');
  }
  openUploadProduct() {
    this.router.navigateByUrl("/upload-product")
  }

  openNewProduct() {
    this.router.navigateByUrl("/add-product");
  }

  async closeSession() {

    this.router.navigateByUrl("\login-users");

    await this.myMenu.close();

    localStorage.clear();

    window.location.reload();

  }


}
