import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../AccountIdentity/account.service';

export const authGuard: CanActivateFn = (route, state) => {

   const router=inject(Router)
    const Accountser=inject(AccountService)

   
   const isLoggedIn= Accountser.isLoggedIn();

   if(isLoggedIn){
    return true;
   }
    router.navigateByUrl('login')
     return false;







   




};
