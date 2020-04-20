import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { IsloggedService } from './islogged.service';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  constructor(public auth: IsloggedService) {}
   reg = '/register/users/';
   log = '/login/';
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.search(this.log) === -1)
    { request = request.clone({
      setHeaders: {
        Authorization: `Token ${this.auth.getToken()}`
      }
      });
    }
    return next.handle(request);
  }
}

