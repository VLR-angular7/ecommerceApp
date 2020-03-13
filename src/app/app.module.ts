import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ProductsModule } from './products/products.module';
import {  AdminModule } from './admin/admin.module';
import {ServicesModule}  from './services/services.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    ServicesModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
