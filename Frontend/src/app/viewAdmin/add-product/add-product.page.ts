import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    public formBuilder : FormBuilder,
    private productService: CoffeeGoServices,
    private router: Router
  ) { 
    this.productForm = this.formBuilder.group({
      nameProduct: ['',Validators.compose([Validators.required])],
      detailsProduct: ['',Validators.compose([Validators.required])],
      priceProduct: ['',Validators.compose([Validators.required])],
      idCategory:['',Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
    this.getAllCategories();

  }

  /**
   *  --------------------------------------------------------------
   * |                      CALL TO APIREST                         |
   *  --------------------------------------------------------------
   */ 

  getAllCategories(){
    this.productService.getCategory().subscribe(response => {
      this.category = response
    });

  }

}
