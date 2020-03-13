import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from'../../services/product-service.service';
import {CartService} from'../../services/cart.service';
import {CommonService} from'../../services/common.service';


import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService :ProductServiceService,private route:Router,private CartService:CartService,private commonService:CommonService) { }
  products:any=[];
  data:any=[];
  quantity:number;
  price:number;
  selectedCategory=null;

  ngOnInit() {
    this.productService.getAllProducts().subscribe(productData=>{
      this.data=productData;
    this.getProductsByCategory(this.selectedCategory);

    });

  }

  getProductsByCategory(category){
    this.selectedCategory=category
    // for(var i=0;i<this.data.length;i++){
    //   if(category==this.data[i].category){
    //     this.products.push(this.data[i])
    //   }
    // }
// this.products=this.data.filter(function(product){
//   return category==product.category;
// })


this.products=this.data.filter(product=> category == null || category==product.category);
  }

  gotoCart(){
    this.route.navigate(['/cart'])
  }

  gotoAdmin(){
    this.route.navigate(['/login'])
  }

  gotoDetail(product){
    this.route.navigate(['/productDetail']);
    this.commonService.sendData(product.name)
  }

  addToCart(product){
    // console.log(product);
    this.CartService.addToCart(product);
    this.quantity=this.CartService.itemCount
    this.price=this.CartService.itemPrice

    
  }




  
}
