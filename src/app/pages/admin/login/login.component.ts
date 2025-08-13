import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../../services/AccountIdentity/account.service';
import { tap, map } from 'rxjs/operators';
import {  Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {

  showLogin = true;

  toggleForm() {
    this.showLogin = !this.showLogin;

  }

  constructor(private route:Router,private httpservice:AccountService){}
  

   loginObj:any={
    "email":'',
     "password":''
   }
     

    onlogin(){
      debugger;
      this.httpservice.Userlogin( this.loginObj).subscribe((res:any)=>{
        if(res.status){
          alert("login Successful...");

          localStorage.setItem("access_token", res.data.accessToken);
              localStorage.setItem("refresh_token",res.data.refreshToken);
             this.route.navigateByUrl("/products");
        }else{
          alert(res.message);
        }

       
     

      });
    }

   

    
   


}
