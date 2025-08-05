import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/products/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {

  categoryList :any []=[];
 constructor (private httpservice:ProductService){}
  ngOnInit(): void {
    this.getAllcategory();
  }

 getAllcategory(){
  this.httpservice.getallCategory().subscribe((res:any)=>{
   this.categoryList=res;

  });
 }



}
