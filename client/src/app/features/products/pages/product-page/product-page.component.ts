// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// Material
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
// Models
import { IProduct } from '../../../../core/models';
import { IUen } from '../../../../core/models/uen.model';
// Services
import { ProductsService } from '../../../../core/services/api/products/products.service';
import { UenService } from '../../../../core/services/api/uen/uen.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  products: IProduct[] = [];
  uens: IUen[] = [];
  total: number = 0;
  pageSize: number = 10;
  page: number = 1;
  loading: boolean = false;

  searchForm!: FormGroup;
  search: string = '';
  title: string = 'Productos';

  constructor(
    private readonly fb: FormBuilder,
    private readonly _productService: ProductsService,
    private readonly _uenService: UenService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // TODO: fix..
    /*this.route.params
      .pipe(
        switchMap((params: Params) => {
          console.log('change: ', params);
          return this._productService.getAll(params.id);
        })
      )
      .subscribe((response) => {
        console.log('response: ', response);
      });*/
    this.initForm();
    this.fetchProducts();
    this.fetchUens();
  }

  changePage(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.page = event.pageIndex + 1;
    this.fetchProducts();
  }

  fetchProducts(search: string = ''): void {
    this.search = search;
    this.loading = true;
    this._productService
      .getAll({ page: this.page, page_size: this.pageSize, search })
      .subscribe((response) => {
        this.products = response.data;
        console.log('response: ', this.products);
        this.total = response.total;
        this.pageSize = response.pageSize;
        this.page = response.page;
        this.loading = false;
      });
  }

  fetchUens() {
    this._uenService.getAll().subscribe((response) => {
      this.uens = response;
      console.log('uens: ', this.uens);
    });
  }

  private initForm() {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  onSubmit(search: string) {
    this.fetchProducts(search);
  }

  cleanInput(): void {
    this.searchForm.controls['search'].setValue('');
    this.fetchProducts('');
  }
}
