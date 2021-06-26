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

  constructor(private readonly _productSrv: ProductsService) {}

  ngOnInit(): void {
    this.products = this._productSrv.getAll();
  }

  goToProductDetail(): void {}

  clickProduct(product: IProduct) {
    console.log('product: ', product);
    // console.log(id);
  }
}
