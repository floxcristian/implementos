import { ProgressService } from './../../services/utils/progress.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ProgressIndicatorInterceptor implements HttpInterceptor {
  constructor(private readonly _progressIndicatorService: ProgressService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(() => this._progressIndicatorService.show()),
      finalize(() => this._progressIndicatorService.hide)
    );
  }
}
