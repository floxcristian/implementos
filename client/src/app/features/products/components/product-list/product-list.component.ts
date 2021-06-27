import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IProduct } from '../../../../core/models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products!: IProduct[];
  @Input() total!: number;
  @Input() pageSize!: number;
  @Input() page!: number;
  @Input() search!: string;
  @Output() _pageChanged: EventEmitter<any> = new EventEmitter();

  pageSizeOptions: number[] = [10, 25, 100];
  pageEvent: PageEvent = new PageEvent();
  loading: boolean = false;

  constructor() {}

  ngOnInit(): void {
    console.log('char: ', this.products);
  }

  pageChange(pageEvent: PageEvent): void {
    this.pageEvent = pageEvent;
    this._pageChanged.emit(pageEvent);
  }

  goToProductDetail(product: IProduct) {
    console.log('goToProductDetail: ', product);
    // console.log(id);
  }

  addToCart(data: any) {
    console.log('addToCart: ', data);
  }

  getTitle() {
    return this.search
      ? `Resultados para: "${this.search}"`
      : 'Todos los resultados';
  }
}
