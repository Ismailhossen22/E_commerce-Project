import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AccountService } from '../../../services/AccountIdentity/account.service';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {
 
 constructor( private httpservice:AccountService,private route:Router){}

 isResetFromVisisable:boolean=false;
 emailId:string='';
  resetObj:any={
     "email": "",
      "otpCode": "",
      "newPassword": ""

  }
  sentOtp(){
    debugger;
    this.isResetFromVisisable=true;
    const obj={
      email:this.emailId
    }
    this.httpservice.forgotPassword(obj).subscribe((res:any) =>{
      if(res.status){
        alert("OTP sent on Email")
      
      }else{
        alert(res.message)
      }
    })
  }
  resetPassword(){
   this.httpservice.resetPassword(this.resetObj).subscribe((res:any)=>{
    if(res.status){
     alert("password updated successfully");
            this.route.navigateByUrl('/login')
    }else{
       alert(res.message);
    }
   })
  }


}
