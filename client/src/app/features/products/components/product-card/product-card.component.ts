import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '@core/models';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: IProduct;
  @Output() _clickedProduct: EventEmitter<any> = new EventEmitter();
  @Output() _addedToCart: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clickedProduct(): void {
    this._clickedProduct.emit(this.product._id);
  }

  /**
   * Añadir producto al carrito.
   */
  addedToCart(): void {
    this._addedToCart.emit(this.product._id);
  }
}
