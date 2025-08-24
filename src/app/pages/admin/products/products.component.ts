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

  //  productList:any;
  isSidePanelVisble: boolean = false;

  constructor(private httpservice: ProductService, private http: AccountService) { }
  ngOnInit(): void {
    this.getallcategorys();
    this.getAllproduct();
    this.getrereshtoken();



  }

  productObj: any = {

    "productId": 0,
    "productName": "",
    "productShortName": "",
    "productPrice": 0,
    "delevaryTimeSpan": "",
    "imageFile": "",
    "productDescription": "",
    "categoryId": 0

  }


  opensidepanel() {
    this.isSidePanelVisble = true;
  }

  closesidepanel() {
    this.isSidePanelVisble = false;


  }
  getallcategorys() {

    this.httpservice.getallCategory().subscribe((res: any) => {
      this.categoryList = res.data;

    });
  }

  productList: any[] = [];       // Data from API
  pageNumber = 1;
  pageSize = 8;
  totalCount = 0;

  getAllproduct() {
    debugger;
    this.httpservice.getAllproduc(this.pageNumber, this.pageSize).subscribe((res: any) => {
      this.totalCount = res.totalCount
      this.productList = res.data
      console.log(res);

    })

  }
  // ------pagination-----

    get totalPages(){
      return Math.ceil(this.totalCount / this.pageSize);
    }
    prevPage(){
      if (this.pageNumber > 1) {

        this.pageNumber--;
        this.getAllproduct();
      }
    }
    nextPage(){
      if (this.pageNumber < this.totalPages) {
        this.pageNumber++;
        this.getAllproduct();
      }
    }

  // ------pagination-----

  onSave() {
    debugger;
    this.httpservice.Createproduct(this.productObj).subscribe((res: any) => {
      this.productList = res
      console.log(this.productList);


    });
  }

  onEdit(item: any) {
    debugger;
    this.productObj = item;
    this.opensidepanel();
  }
  onUpdate() {
    debugger;
    this.httpservice.updateProduct(this.productObj.productId, this.productObj).subscribe((res: any) => {

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

  getrereshtoken() {
    debugger;
    this.http.RefreshToken().subscribe((res: any) => {

      console.log(res);
      console.log("ismail hossen");
    })
  }





}



























