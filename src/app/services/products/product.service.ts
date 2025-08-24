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

    
    //product section/categoryId?categoryId=105
 
      //   getcategoryById(id: number) {
      //   const params = { categoryId: id };
      //   return this.http.get(this.apiUrl + 'Product/categoryId', { params });
      // };

    getcategoryById(id:number){
      

     return this.http.get(this.apiUrl+'Product/categoryId?categoryId='+id);
    }
    // return this.http.get(`${this.apiUrl}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    //https://localhost:44307/api/Product/GetAllProduct?pageNumber=1&pageSize=5
    //this.apiUrl+'Product/GetAllProduct'
    //  getAllproduct(){
    //     return this.http.get(this.apiUrl+'Product/GetAllProduct')

    //  }
    getAllproduc(pageNumber:number,pageSize:number){
     return this.http.get(`${this.apiUrl}${"Product/GetAllProduct"}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    }

   Createproduct(obj:any){
    return this.http.post(this.apiUrl+'Product/AddProducts', obj);
   };
  //Product/id?id=28
   updateProduct(id:any,obj:any){
    return this.http.put(this.apiUrl+'Product/'+id,obj);
   };
   onDelete(id:any){
    return this.http.delete(this.apiUrl+'Product/'+id);
   }

  

}
