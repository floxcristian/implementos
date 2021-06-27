import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS
} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [BrowserAnimationsModule, HttpClientModule]
})
export class CoreModule {}
