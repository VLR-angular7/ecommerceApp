import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service'
import {OrdersService} from '../../services/orders.service'


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
order:any={};
finalOrder:any={};
  constructor(private cartService:CartService,private orderService:OrdersService) { }
  itemCount:number;
  itemPrice:number;
  isFormSubmitted:boolean=false;
  items:any=[];
  ngOnInit() {
    this.itemCount=this.cartService.itemCount;
    this.itemPrice=this.cartService.itemPrice;
    this.items=this.cartService.items;

    console.log(this.orderService.orderdata)

    console.log(this.itemCount)
    console.log(this.itemPrice)
    console.log(this.items)


  }

  placeOrder(orderForm){
    this.finalOrder.itemCount=this.itemCount;
    this.finalOrder.itemPrice=this.itemPrice;
    this.finalOrder.items=this.items;
    this.finalOrder.address=this.order;

     console.log(orderForm);
    this.orderService.saveOrder(this.finalOrder).subscribe(res=>{
      console.log(res);
    })

  }

}

