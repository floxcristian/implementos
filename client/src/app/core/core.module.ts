import { ProgressIndicatorInterceptor } from './interceptors/progress-indicator/progress-indicator.interceptor';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS
} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [BrowserAnimationsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProgressIndicatorInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
