import { Component, OnInit } from '@angular/core';
import { IProduct } from '@core/models';
import { ProductsService } from '@core/services/api/products/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  products: IProduct[] = [];
  total: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [10, 25, 100];
  loading: boolean = false;

  constructor(private readonly _productSrv: ProductsService) {}

  ngOnInit(): void {
    this.loading = true;
    this._productSrv.getAll().subscribe((response) => {
      console.log('data: ', response);
      this.products = response.data;
      this.total = response.total;
      this.loading = false;
    });
  }

  goToProductDetail(product: IProduct) {
    console.log('goToProductDetail: ', product);
    // console.log(id);
  }

  addToCart(data: any) {
    console.log('addToCart: ', data);
  }
}
