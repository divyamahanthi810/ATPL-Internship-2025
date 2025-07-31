import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, finalize, retry } from 'rxjs/operators';
import { LoadingspinnerService } from './loadingspinner.service';

export const loadingSpinnerInterceptorFunctional: HttpInterceptorFn = (req, next) => {
  const loadingService = new LoadingspinnerService();
  loadingService.showLoadingSpinner();

  return next(req).pipe(
    finalize(() => {
      loadingService.hideLoadingSpinner(); 
    })
  );
};

export const authInterceptorFunctional: HttpInterceptorFn = (req, next) => {
  const authToken = 'YOUR_AUTH_TOKEN_HERE';

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });
  return next(authReq);
};

export const retryInterceptorFunctional: HttpInterceptorFn = (req, next) => {
  const maxRetries = 3;

  return next(req).pipe(
    retry(maxRetries),
    catchError((error: HttpErrorResponse) => {
      console.error('Retry Interceptor Functional Error:', error);
      return throwError(()=> error);
    })
  );
};


export const loggingInterceptorFunctional: HttpInterceptorFn = (req, next) => {
  console.log('Request URL: ' + req.url);
  return next(req);
}