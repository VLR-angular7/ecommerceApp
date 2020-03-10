import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../services/product-service.service'

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
products:any=[];
product:any={};
  constructor(private prodService:ProductServiceService) { }

  ngOnInit() {
this.getAllProducts();
  }


  getAllProducts(){
    this.prodService.getAllProducts().subscribe(data=>{
      this.products=data;
    })
  }

  editProduct(currentProduct){
    this.product=currentProduct;
  }


  updateProduct(){
    this.prodService.updateProduct(this.product).subscribe(data=>{
    })
  }


  deleteProduct(currentProduct){
    this.prodService.deleteProduct(currentProduct).subscribe(data=>{
      alert("product deleted successfully")
     this.getAllProducts();
    })
  }

}
