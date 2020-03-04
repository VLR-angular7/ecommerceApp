import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ProductsModule } from './products/products.module';
import {ServicesModule}  from './services/services.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    ServicesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
