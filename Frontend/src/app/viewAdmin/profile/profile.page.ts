import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { CoffeeGoServices } from 'src/app/services/coffee-go-services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage implements OnInit {

    product: any = [];

  constructor(
    private router: Router,
    private productService: CoffeeGoServices,
    private myMenu: MenuController,
  ) { }

  ngOnInit() {
    
  }
   ionViewWillEnter() {
    this.getAllProduct();
  }

  back(){
    this.router.navigateByUrl("/login-users");
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
