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

  productlist:any []=[];

  constructor(private httpservice:ProductService){}

  ngOnInit(): void {

    
    this.getAllproduct();

  }
  Message:string='';

  getAllproduct(){
    this.httpservice.getAllproduct().subscribe({
      next:(res:any)=> {
        this.productlist=res.data
        console.log(res.message);
        
      }
    })
   

    
  }

}
