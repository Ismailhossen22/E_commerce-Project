import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router'
import { ProductService } from '../../../services/products/product.service';
import { AccountService } from '../../../services/AccountIdentity/account.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit  {
  user:any
  isLoggedIn = false;
  constructor(private Accountser:AccountService){}

  ngOnInit(): void {

    this.isLoggedIn=this.Accountser.isLoggedIn()

    if(this.isLoggedIn){
      this.user=this.Accountser.getUser();
    }
  
   
  }
    

 logout(){
  
  this.Accountser.logout()
 }







  }

 
  


