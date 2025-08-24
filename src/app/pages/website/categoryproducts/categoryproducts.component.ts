import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../../../services/products/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoryproducts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoryproducts.component.html',
  styleUrl: './categoryproducts.component.css'
})
export class CategoryproductsComponent {

  categoryproductlist:any []=[]
  activeCategoryId:number=0;

  constructor(private httpservice:ProductService,private activatedRoute:ActivatedRoute){
        this.activatedRoute.params.subscribe((res:any)=>{
   this.activeCategoryId=res.id;
   this.loadproduct();
   
  });

  }
  
  productlist:any []=[];      // Data from API
    pageNumber = 1;
    pageSize = 6;
    totalCount =40;
   
  loadproduct(){
    this.httpservice.getcategoryById(this.activeCategoryId).subscribe((res:any)=>{
   this.categoryproductlist=res.data;

    });
  }


 get totalPages(){
    return Math.ceil(this.totalCount/this.pageSize);
   }
 prevPage(){
  if(this.pageNumber >1){

    this.pageNumber --;
   // this.getAllproduct();
  }
 }
 nextPage(){
  if(this.pageNumber<this.totalPages){
      this.pageNumber ++;
     // this.getAllproduct();
  }
 }



}
