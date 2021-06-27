import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Router } from '@angular/router';
import { IProduct } from '@core/models';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private API_URL: string = environment.apiUrl;

  products: IProduct[] = [];

  constructor(public router: Router, public http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.API_URL}/product`);
  }

  getById(id: string): IProduct | null {
    return this.products.find((product) => product._id === id) || null;
  }
}
