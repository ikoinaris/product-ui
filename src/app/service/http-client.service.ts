import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Product {
  constructor(
    public productId: string,
    public name: string,
    public code: string,
    public title: string,
    public description: string,
    public imageUrl: string,
    public price: string
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    console.log("Products fetched succesfully!");
    return this.httpClient.get<Product[]>("http://localhost:8080/products");
  }
}
