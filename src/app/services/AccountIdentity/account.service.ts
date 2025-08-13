import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {



  httpOption={
      headers:new HttpHeaders({
        'Content-Type':'application/json'

      })
    }

  constructor(private http:HttpClient) { }
  apiUrl:string ="https://localhost:44307/api/Account/";
  

  Userlogin(obj:any){
   return this.http.post(this.apiUrl+"Login",obj,this.httpOption);
  }
  
  

  logout(){
    localStorage.removeItem("access_token");
    localStorage.removeItem('refresh_token')
  }
          

   RefreshToken():Observable<string> {
  
    const token=localStorage.getItem( 'refresh_token' ) ;
    console.log(token);
    return this.http.post(this.apiUrl+"Refresh", {refreshToken:token},this.httpOption).pipe(
      tap((res:any) =>{
        localStorage.setItem('access_token',res.data.accessToken)
      } ),
      map(res=>res.data.accessToken)
    );

   }







}
