import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl:string ='https://localhost:44307/api/';

  constructor(private http:HttpClient) { }

    getallCategory(){
      return this.http.get(this.apiUrl+'Category/GetAllCategory');
    };
    getAllproduct(){
     return this.http.get(this.apiUrl+'Product/GetAllProduct');
    }

   Createproduct(obj:any){
    return this.http.post(this.apiUrl+'Product/AddProducts', obj);
   };
  
   updateProduct(id:any,obj:any){
    return this.http.put(this.apiUrl+'Product/'+id,obj);
   };
   onDelete(id:any){
    return this.http.delete(this.apiUrl+'product/'+id);
   }

   getAllCategoryById(){
    return this.http.get(this.apiUrl+'Category/GetbycategoryId?id=101')
   }
   

}
