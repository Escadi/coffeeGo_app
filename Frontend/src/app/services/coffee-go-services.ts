import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoffeeGoServices {

  endPointClients = "http://localhost:8080/api/client"
  endPointProducts= "http://localhost:8080/api/product"
  endPointCategories="http://localhost:8080/api/category"

  constructor (
    private httpClient: HttpClient
  ) {}

  
  /**
   *  --------------------------------------------------------------
   * |                      SERVICE FOR PRODUCTS                    |
   *  --------------------------------------------------------------
   */ 
  
  getProduct(){
    return this.httpClient.get(this.endPointProducts);
  }
  
  /**
   *  --------------------------------------------------------------
   * |                     SERVICE FOR CATEGORY                     |
   *  --------------------------------------------------------------
   */ 
  getCategory(){
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
