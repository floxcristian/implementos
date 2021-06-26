import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

@NgModule({
  declarations: [ProductPageComponent, ProductDetailPageComponent],
  imports: [CommonModule, ProductsRoutingModule]
})
export class ProductsModule {}
