import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../../core/models';
import { ProductsService } from '../../../../core/services/api/products/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  products: IProduct[] = [];
  total: number = 0;
  pageSize: number = 10;
  page: number = 1;
  loading: boolean = false;

  constructor(private readonly _productSrv: ProductsService) {}

  ngOnInit(): void {
    this.loading = true;
    this._productSrv.getAll().subscribe((response) => {
      this.products = response.data;
      console.log('response: ', this.products);
      this.total = response.total;
      this.pageSize = response.pageSize;
      this.page = response.page;
      this.loading = false;
    });
  }
}
