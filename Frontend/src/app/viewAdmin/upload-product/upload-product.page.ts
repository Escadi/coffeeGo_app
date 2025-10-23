import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoffeeGoServices } from 'src/app/services/coffee-go-services';
import { Location } from '@angular/common';

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
    private location: Location,
    private route: Router
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
        console.log("nameProduct", this.nameProduct);
      },
    });
  }

  updateProduct() {
    const updatedProduct = {
      nameProduct: this.nameProduct,
      detailsProduct: this.detailsProduct,
      priceProduct: this.priceProduct,
      idCategory: this.idCategory
    };

    this.productService.updateProduct(this.id, updatedProduct).subscribe({
      next: res => {
        
         this.location.back();
      },
      error: err => {
        
        alert('Error al actualizar el producto');
      }
    });
  }

  

  //Categories
  getAllCategories() {
    this.productService.getCategory().subscribe(response => {
      this.category = response
    });
  }

}
