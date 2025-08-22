import { HttpErrorResponse, HttpInterceptorFn, HttpStatusCode } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { throws } from 'assert';


import { json } from 'stream/consumers';

import { AccountService } from './AccountIdentity/account.service';
import { catchError, switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs';


export const jwtinterceptorInterceptor: HttpInterceptorFn = (req, next) => {


 const route=inject(Router)
 const accoutser=inject(AccountService)
   let token = null;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('access_token');
  }
  


  if(token){
   req=req.clone({
    setHeaders:{

      Authorization:`Bearer ${token} `
    }
   })

  }
  debugger;

  return next(req)

  .pipe(
    catchError((error:HttpErrorResponse)=>{
      debugger;
      if(error.status===401){
        return accoutser.RefreshToken().pipe(
        switchMap(newtoken=>{
          const newReq=req.clone({
            setHeaders:{Authorization:`Bearer ${newtoken} `
   
              
            }
          });
          return next(newReq)
        }),
        catchError(refreshErr=>{
          
             //accoutser.logout();
        route.navigateByUrl("/login");
          return throwError(()=> refreshErr)
        } )
        

        )
    
        
      }

       return throwError(() =>error)
    })
    
  )


};

