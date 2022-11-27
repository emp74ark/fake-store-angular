import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from "./user.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
      private user: UserService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.user.authenticated) {
      const token = `Bearer ${this.user.token}`;
      request = request.clone({
        setHeaders: {Authorization: token}
      });
    }
    return next.handle(request);
  }
}
