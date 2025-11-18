
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { CoffeeGoServices } from 'src/app/services/coffee-go-services';
import { PhotoService } from 'src/app/services/photo-service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
  standalone: false
})
export class AddProductPage implements OnInit {

  productForm: FormGroup;
  category: any = [];
  capturePhoto: string = "";
  isSummitted: Boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    private productService: CoffeeGoServices,
    private photoService: PhotoService,
    private router: Router,
    private alertController: AlertController,
    private navCtrl : NavController
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
    header: 'Éxito',
    message: 'Producto añadido correctamente',
    buttons: [
      {
        text: 'OK',
        handler: async () => {
          this.productForm.reset();
          this.capturePhoto = "";
          this.navCtrl.back();
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
  async createProduct() {
    this.isSummitted = true;
    if (!this.productForm.valid) {
      console.log('Please provide all the required values!')
      return;
    } else {
      let blob = null;
      if (this.capturePhoto != "") {
        const response = await fetch(this.capturePhoto);
        blob = await response.blob();
      }

      this.productService.createProduct(this.productForm.value, blob).subscribe({
       next: async (data) =>{
        await this.alertAdd();
       }
      });
      
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

  /**
   *  --------------------------------------------------------------
   * |                       ADD PICTURES                           |
   *  --------------------------------------------------------------
   */

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturePhoto = data.webPath ? data.webPath : "";
    });
  }
  pickPhoto() {
    this.photoService.pickImage().then(data => {
      this.capturePhoto = data.webPath;
    });
  }


}

