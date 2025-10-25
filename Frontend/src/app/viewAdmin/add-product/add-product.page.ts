
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { CoffeeGoServices } from 'src/app/services/coffee-go-services';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
  standalone: false
})
export class AddProductPage implements OnInit {

  productForm: FormGroup;
  category: any = [];

  constructor(
    public formBuilder: FormBuilder,
    private productService: CoffeeGoServices,
    private router: Router,
    private alertController: AlertController,
    private navControl: NavController
  ) {
    this.productForm = this.formBuilder.group({
      nameProduct: ['', Validators.compose([Validators.required])],
      detailsProduct: ['', Validators.compose([Validators.required])],
      priceProduct: ['', Validators.compose([Validators.required])],
      idCategory: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
    this.getAllCategories();

  }

  /** --------------------------------------------------------------------------------------
   * |                            ALERT ASYNC FOR AFTER TO ADD NEW BICYCLE                  | 
   *  --------------------------------------------------------------------------------------
   */
  async alertAdd() {
    const alert = await this.alertController.create({
      header: 'exito',
      message: 'Producto añadido correctamente',
      buttons: [
        {
          text:'OK',
          handler: () => {
            this.productForm.reset();
            this.navControl.navigateBack('manage-product');
          }
        }
      ]
    });
    await alert.present();
  }

  /**
   *  --------------------------------------------------------------
   * |                      CALL TO APIREST                         |
   *  --------------------------------------------------------------
   */

  //Product
createProduct() {
  if (this.productForm.valid) {
    this.productService.createProduct(this.productForm.value).subscribe({
      next: async (response) => {
        await this.alertAdd();
      },
      error: (err) => {
        console.error('Error al crear el producto', err);
      }
    });
  } else {
    console.log("Formulario no válido");
  }
}

  getFormControl(field: string) {
    return this.productForm.get(field);
  }


  //Categories
  getAllCategories() {
    this.productService.getCategory().subscribe(response => {
      this.category = response
    });
  }

}

