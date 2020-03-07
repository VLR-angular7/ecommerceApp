import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [LoginComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
