import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoffeeGoServices {

  endPointClients = "http://localhost:8080/api/clients"
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

  createProduct(product: any , blob: any) {
    let formData = new FormData();
    formData.append("nameProduct", product.nameProduct);
    formData.append("detailsProduct", product.detailsProduct);
    formData.append("priceProduct", product.priceProduct);
    formData.append("idCategory", product.idCategory);
    formData.append("file", blob);

    return this.httpClient.post(this.endPointProducts, formData);
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


  getClient(){
    return this.httpClient.get(this.endPointClients)
  }

  createClient(client: any){

    let formData = new FormData();

    formData.append("nameClient", client.nameClient);
    formData.append("usernameClient", client.usernameClient);
    formData.append("emailClient",client.emailClient);
    formData.append("passwordClient", client.passwordClient);
    formData.append("rolUserClient", client.rolUserClient);

    return this.httpClient.post(this.endPointClients,formData);
  }

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
