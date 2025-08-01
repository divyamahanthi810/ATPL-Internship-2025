import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, withInterceptors } from '@angular/common/http';
import {  loadingSpinnerInterceptorFunctional, loggingInterceptorFunctional,  } from './Task3/logging.interceptor';
import { LoadingspinnerService } from './Task3/loadingspinner.service';
import { AuthService } from './Task3/auth.service';
import { AuthInterceptor} from './Task4/auth.interceptor';
import { AuthoInterceptor } from './JWT/autho.interceptor';
export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withInterceptors([
        loadingSpinnerInterceptorFunctional,  
        loggingInterceptorFunctional, 
      ])), 
      [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
      ],
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    [provideHttpClient()],
    { provide: HTTP_INTERCEPTORS, useClass: AuthoInterceptor, multi: true }
  ],
  
};
