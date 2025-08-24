import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/products/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-web-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-products.component.html',
  styleUrl: './web-products.component.css'
})
export class WebProductsComponent implements OnInit {

  

  constructor(private httpservice:ProductService){}

  ngOnInit(): void {

    
    this.getAllproduct();

  }
  Message:string='';
  productlist:any []=[];      // Data from API
    pageNumber = 1;
    pageSize = 6;
    totalCount =0;

  getAllproduct(){
    debugger;
    this.httpservice.getAllproduc(this.pageNumber,this.pageSize).subscribe({
      next:(res:any)=> {
        this.productlist=res.data;
        this.totalCount=res.totalCount;
        console.log(res.message);
        
      }
    })
  
    
  }

   get totalPages(){
    return Math.ceil(this.totalCount/this.pageSize);
   }
 prevPage(){
  if(this.pageNumber >1){

    this.pageNumber --;
    this.getAllproduct();
  }
 }
 nextPage(){
  if(this.pageNumber<this.totalPages){
      this.pageNumber ++;
      this.getAllproduct();
  }
 }





}
