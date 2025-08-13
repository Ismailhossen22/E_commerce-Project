import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/products/product.service';

import { map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccountService } from '../../../services/AccountIdentity/account.service';





@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {



  categoryList: any[] = [];
  productList: any[] = [];
  //  productList:any;
  isSidePanelVisble: boolean = false;

  constructor(private httpservice: ProductService, private http: AccountService) { }
  ngOnInit(): void {
    this.getallcategorys();
    this.getAllproduct();
   



  }

  productObj: any = {

    "productId": 0,
    "productName": "",
    "productShortName": "",
    "productPrice": 0,
    "delevaryTimeSpan": "",
    "imageFile": "",
    "productDescription": "",
    "category_ID": 0

  }


  opensidepanel() {
    this.isSidePanelVisble = true;
  }

  closesidepanel() {
    this.isSidePanelVisble = false;


  }
  getallcategorys() {

    this.httpservice.getallCategory().subscribe((res: any) => {
      this.categoryList = res;

    });
  }
  getAllproduct() {
    this.httpservice.getAllproduct().subscribe((res: any) => {

      this.productList = res.data

    })





  }


  onSave() {
    debugger;
    this.httpservice.Createproduct(this.productObj).subscribe((res: any) => {
      this.productList = res
      console.log(this.productList);


    });
  }

  onEdit(item: any) {
    this.productObj = item;
    this.opensidepanel();
  }
  onUpdate() {
    this.httpservice.updateProduct(this.productObj, this.productObj.productId).subscribe((res: any) => {

    })
  }


  onDelete(items: any) {
    const isDelete = confirm('Are you sure Delete product')
    if (isDelete) {
      this.httpservice.onDelete(items.productId).subscribe((res: any) => {
        this.getAllproduct();

      });
    }
  }
 
  getrereshtoken(){
    debugger;
    this.http.RefreshToken().subscribe((res:any)=>{

      console.log(res);
      console.log("ismail hossen");
    } )
  }



   

  }
  

   
     
  






















