import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IProduct } from '@core/models';
import { ProductsService } from '@core/services/api/products/products.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {
  mainImgPath: string = '';
  totalPrice: any;
  type: any;
  colorsArray: string[] = ['Red', 'Blue', 'Yellow', 'Green'];
  sizeArray: number[] = [36, 38, 40, 42, 44, 46, 48];
  quantityArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  productReviews: any;

  image_gallery = [
    'https://embryo.theironnetwork.org/assets/images/men/4-item-b.jpg'
  ];

  product!: IProduct;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly _productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log('params: ', params);
      this._productService.getByCode(params.code).subscribe((product) => {
        this.product = product;
      });
    });
  }

  fetchProductById() {
    //this._productService.getByCode()
  }
}
