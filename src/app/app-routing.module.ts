import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent} from './products/products/products.component';
import { CartComponent } from './products/cart/cart.component';
import { OrdersComponent } from './products/orders/orders.component';
import {LoginComponent}    from './admin/login/login.component'
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  {
    path:'',
    component:ProductsComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'orders',
    component:OrdersComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin',
    component:AdminDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
