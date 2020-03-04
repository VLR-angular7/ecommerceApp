import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService) { }
items:any[]=[];
cartPrice:number
  ngOnInit() {
    this.items=this.cartService.items;
    this.cartPrice=this.cartService.itemPrice;

    console.log(this.items)
  }

  updateQuantity(quantity,product){
    this.cartService.updateQuntity(quantity,product);
    this.cartPrice=this.cartService.itemPrice;

  }


  removeItem(product){
    this.cartService.removeItem(product);
    this.cartPrice=this.cartService.itemPrice;
  }

}
