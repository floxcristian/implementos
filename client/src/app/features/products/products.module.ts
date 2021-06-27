import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    ProductPageComponent,
    ProductDetailPageComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [CommonModule, ProductsRoutingModule, SharedModule]
})
export class ProductsModule {}
