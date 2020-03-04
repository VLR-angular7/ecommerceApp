import { Injectable } from '@angular/core';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itemCount:number=0;
  itemPrice:number=0;
  items:any[]=[];
  constructor() { }

  addToCart(product,quantity=1){
let cartObj= new Cart(product,quantity);
this.items.push(cartObj);
this.calucalateCartValue();
  }

  updateQuntity(quantity,product){
    let currentItem=this.items.find(item=>item.product.id==product.id);
    currentItem.quantity=quantity;
    this.calucalateCartValue();
    console.log(currentItem);
  }


  removeItem(product){
let currentIndex=this.items.findIndex(item=>item.product.id==product.id);
this.items.splice(currentIndex,1);
this.calucalateCartValue();
  }
  calucalateCartValue(){
    this.itemCount=0;
    this.itemPrice=0;
this.items.forEach(item=>{
  this.itemCount=this.itemCount + item.quantity;
  this.itemPrice=this.itemPrice + item.quantity * item.product.price;

})



  }



}
