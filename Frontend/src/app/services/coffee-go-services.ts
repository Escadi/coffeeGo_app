import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoffeeGoServices {

  endPointClients = "http://localhost:8080/api/client"
  endPointProducts = "http://localhost:8080/api/product"
  endPointCategories = "http://localhost:8080/api/category"

  constructor(
    private httpClient: HttpClient
  ) { }


  /**
   *  --------------------------------------------------------------
   * |                      SERVICE FOR PRODUCTS                    |
   *  --------------------------------------------------------------
   */

  getProduct() {
    return this.httpClient.get(this.endPointProducts);
  }

  createProduct(product: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();

    body.append("nameProduct", product.nameProduct);
    body.append("detailsProduct", product.detailsProduct);
    body.append("priceProduct", product.priceProduct);
    body.append("idCategory", product.idCategory);

    return this.httpClient.post(this.endPointProducts, body.toString(), { headers });

  }

  updateProduct(id: number, product: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const bodyProduct = new URLSearchParams();
    bodyProduct.append("nameProduct", product.nameProduct);
    bodyProduct.append("detailsProduct", product.detailsProduct);
    bodyProduct.append("priceProduct", product.priceProduct);
    bodyProduct.append("idCategory", product.idCategory);

    return this.httpClient.put(`${this.endPointProducts}/${id}`, bodyProduct.toString(), {headers} );
  }
  
  deleteProduct(id:number){
    return this.httpClient.delete(`${this.endPointProducts}/${id}}`);
  }

  getProductoId(id: number) {
    return this.httpClient.get(`${this.endPointProducts}/${id}`);
  }

  /**
   *  --------------------------------------------------------------
   * |                     SERVICE FOR CATEGORY                     |
   *  --------------------------------------------------------------
   */
  getCategory() {
    return this.httpClient.get(this.endPointCategories);
  }

  /**
   *  --------------------------------------------------------------
   * |                      SERVICE FOR CLIENTS                    |
   *  --------------------------------------------------------------
   */

  /**
   *  --------------------------------------------------------------
   * |                      SERVICE FOR ORDERS                      |
   *  --------------------------------------------------------------
   */

  /**
   *  --------------------------------------------------------------
   * |                      SERVICE FOR PAY                         |
   *  --------------------------------------------------------------
   */


}
