import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoffeeGoServices {

  endPoint = "http://localhost:8080/api/clients"
  constructor (
    private httpClient: HttpClient
  ) {}

  
  
}
