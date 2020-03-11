import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get("http://localhost:3000/products")
  }

  getAllOrders(){
    return this.http.get("http://localhost:3000/orders")
  }

  addProduct(productData){
    return this.http.post("http://localhost:3000/products/",productData)

  }

  updateProduct(productData){
    console.log(productData)
    return this.http.put("http://localhost:3000/products/"+productData.id,productData)
  }

  deleteProduct(productData){
    return this.http.delete("http://localhost:3000/products/"+productData.id)

  }
}


