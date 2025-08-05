import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  showLogin = true;

  toggleForm() {
    this.showLogin = !this.showLogin;

  }

  constructor(private route:Router){}


   loginObj:any={
    userName:'',
    password:''
   }
    onlogin(){
      debugger;
      if(this.loginObj.userName=='admin' && this.loginObj.password =='3344'){
        this.route.navigateByUrl('/products');
        
      }else{
       alert('username or password invalid');
      }
    }
   


}
