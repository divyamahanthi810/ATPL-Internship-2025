import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthoService } from './autho.service';

@Injectable()
export class AuthoInterceptor implements HttpInterceptor {

  constructor(private authService: AuthoService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const excludedUrls = ['/login', '/register'];

    const shouldSkip = excludedUrls.some(url => req.url.includes(url));
    if (shouldSkip) {
      return next.handle(req);
    }

    const token = this.authService.getToken();
    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(cloned);
    }

    return next.handle(req);
  }
}
