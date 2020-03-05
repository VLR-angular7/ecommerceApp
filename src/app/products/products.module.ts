import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';



@NgModule({
  declarations: [ProductsComponent, CartComponent, OrdersComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProductsModule { }
