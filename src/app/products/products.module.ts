import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [ProductsComponent, CartComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
