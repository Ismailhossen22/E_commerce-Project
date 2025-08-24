import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { map, Observable, tap,catchError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AccountService {



  httpOption={
      headers:new HttpHeaders({
        'Content-Type':'application/json'

      })
    }

  constructor(private http:HttpClient,private router:Router ) { }

  apiUrl:string ="https://localhost:44307/api/Account/";
  

  Userlogin(obj:any){
   return this.http.post(this.apiUrl+"Login",obj,this.httpOption);
  }
  
  

  logout() {

    const token=localStorage.getItem( 'refresh_token' ) ;
    
    console.log(token);
    debugger
     this.http.post(this.apiUrl+"Logout", {refreshToken:token},this.httpOption).subscribe(res=>{
         console.log(res);
          localStorage.clear();
            this.router.navigate(['/login']);

     })
     
    
  }
          

   RefreshToken():Observable<string> {
   debugger;
    const token=localStorage.getItem( 'refresh_token' ) ;
    
    return this.http.post(this.apiUrl+"Refresh", {refreshToken:token},this.httpOption).pipe(
      tap((res:any) =>{
         localStorage.setItem("access_token", res.data.accessToken);
        console.log(res);
      } ),
      map(res=>res.data.accessToken)

        
  
    );

    
   }

    getUser(){
     return JSON.parse(localStorage.getItem("user")||"{ }" );

    };
    
    isLoggedIn(){
      debugger;
      return !!localStorage.getItem('access_token')
    }
     
   AddUser(obj:any){
    return this.http.post(this.apiUrl+"Register" ,obj)
  }
   forgotPassword(emailId:any){
    return this.http.post(this.apiUrl+'forgot-password',emailId)
   }
  
   resetPassword(obj:any){
    return this.http.post(this.apiUrl+'reset-password',obj)
   }

}
