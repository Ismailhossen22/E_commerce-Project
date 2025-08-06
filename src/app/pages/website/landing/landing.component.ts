import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ProductService } from '../../../services/products/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
 categorylist :any []=[];

 
constructor(private httpservice:ProductService,private route:Router){}
  ngOnInit(): void {
    this.getAllcategory();
    
  }


getAllcategory(){
  this.httpservice.getallCategory().subscribe((res:any)=>{
  this.categorylist=res;

  })

}
navigateurlprodct( id:number){
this.route.navigate(['/products',id])

}


}
