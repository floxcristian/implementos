// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// UI Module
import { MaterialModule } from './material.module';
// Translate Module
// import { TranslateModule } from "@ngx-translate/core";
// Angular FlexLayout
// import { FlexLayoutModule } from "@angular/flex-layout";
// Layout
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ClpCurrencyPipe } from './pipes/clp-currency/clp-currency.pipe';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AsideSliderComponent } from './layouts/aside-slider/aside-slider.component';
import { ProgressIndicatorComponent } from './components/progress-indicator/progress-indicator.component';

const MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule
  // TranslateModule,
  // FlexLayoutModule,
];

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  MainLayoutComponent,
  AuthLayoutComponent,
  AsideSliderComponent
];

const PIPES = [ClpCurrencyPipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES, ProgressIndicatorComponent],
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS, ...PIPES]
})
export class SharedModule {}
