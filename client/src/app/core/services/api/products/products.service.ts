import { Observable } from 'rxjs';
import { IProductDTO } from './../../../models/product-dto.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getAll(params: {
    page?: number;
    page_size?: number;
    search?: string;
  }): Observable<IProductDTO> {
    return this.http.get<IProductDTO>(`${this.API_URL}/product`, { params });
  }

  getById(id: string) {
    //return this.products.find((product) => product._id === id) || null;
    return this.http.get(`${this.API_URL}/product/${id}`);
  }

  getByCode(code: string): Observable<any> {
    return this.http.get(`${this.API_URL}/product/${code}`);
  }
}
