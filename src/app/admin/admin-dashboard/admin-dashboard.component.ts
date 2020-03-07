import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../services/product-service.service'

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
products:any=[];
  constructor(private prodService:ProductServiceService) { }

  ngOnInit() {
this.prodService.getAllProducts().subscribe(data=>{
  this.products=data;
})
  }

}
