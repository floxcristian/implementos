import { Component, Input, OnInit } from '@angular/core';
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
  pageSizeOptions: number[] = [10, 25, 100];
  loading: boolean = false;
  constructor() {}

  ngOnInit(): void {
    console.log('char: ', this.products);
  }
}
