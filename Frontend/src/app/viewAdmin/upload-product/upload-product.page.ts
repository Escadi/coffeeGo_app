import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoffeeGoServices } from 'src/app/services/coffee-go-services';
import { Location } from '@angular/common';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.page.html',
  styleUrls: ['./upload-product.page.scss'],
  standalone: false
})
export class UploadProductPage implements OnInit {

  id: any;
  product: any = [];
  category: any = [];
  nameProduct: string = '';
  detailsProduct: string = '';
  priceProduct: number = 0;
  idCategory: number = 0;

  constructor(
    private productService: CoffeeGoServices,
    private activatedRouter: ActivatedRoute,
    private alertController: AlertController,
    private location: Location,
    private route: Router,
    private navController: NavController
  ) { }


  ngOnInit() {
    this.id = this.activatedRouter.snapshot.paramMap.get("id");
    console.log("id", this.id);
    if (this.id) {
      this.loadProduct();
    }

    this.getAllCategories();

  }

  getAllProducts() {
    this.productService.getProduct().subscribe(response => {
      this.product = response
    });
  }

  loadProduct() {
    this.productService.getProductoId(this.id).subscribe({
      next: (response: any) => {
        this.product = response;

        this.nameProduct = response.nameProduct;
        this.detailsProduct = response.detailsProduct;
        this.priceProduct = response.priceProduct;
        this.idCategory = response.idCategory;
      },

    });
  }

  async updateProduct() {
    const updatedProduct = {
      nameProduct: this.nameProduct,
      detailsProduct: this.detailsProduct,
      priceProduct: this.priceProduct,
      idCategory: this.idCategory
    };

    const alert = await this.alertController.create({
      header: 'Modificar',
      message: '¿Deseas modificar el producto?',
      buttons: [
        {
          text: 'Modificar',
          handler: () => {
            this.productService.updateProduct(this.id, updatedProduct).subscribe({
              next: res => {
                this.location.back();
              }
            });
          }
        },
        {
           text:'Cancelar',
           role:'cancel',
           cssClass: 'cancel-button'
        }
         
      ]
    });
    await alert.present();

  }

  async deleteProduct() {
    const alert = await this.alertController.create({
      header: 'Eliminar',
      message: '¿Estas Seguro de querer eliminarlo?',
      cssClass: 'alert-custom',
      buttons: [
        {
          text: 'Eliminar',
          cssClass: 'delete-button',
          handler: () => {
            this.productService.deleteProduct(this.id).subscribe({
              next:res =>{
                this.location.back();
              }

            });
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'cancel-button'
        }


      ]
    });
    await alert.present();
  }
  //Categories
  getAllCategories() {
    this.productService.getCategory().subscribe(response => {
      this.category = response
    });
  }

}
