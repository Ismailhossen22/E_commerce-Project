import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { jwtinterceptorInterceptor } from './services/jwtinterceptor.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

      
     provideHttpClient(
      withInterceptors([jwtinterceptorInterceptor]),
      withFetch()
     
    
    )
   
    
    
  ]
};
