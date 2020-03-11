import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../services/product-service.service'

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
products:any=[];
orders:any=[];

product:any={};
  selectedMenu: string='products';
  showProductData: boolean;
  modalTitle: string;
  showAddBtn: boolean;
  showUpdateBtn: boolean;
  showOrderData: boolean;
  constructor(private prodService:ProductServiceService) { }

  ngOnInit() {
    this.getData('products');
  }

  getAllProducts(){
    this.prodService.getAllProducts().subscribe(data=>{
      this.products=data;
    })
  }

  
  getAllOrders(){
    this.prodService.getAllOrders().subscribe(data=>{
      this.orders=data;
      console.log(this.orders)
    })
  }

  editProduct(currentProduct){
    this.showAddBtn=false;
    this.showUpdateBtn=true;
    this.modalTitle=currentProduct.name;
    this.product=currentProduct;
  }


openAddproductModel(){
  this.modalTitle="Add Product";
  this.showAddBtn=true;
  this.showUpdateBtn=false;
}


  addProduct(){
    this.prodService.addProduct(this.product).subscribe(data=>{
      this.getAllProducts();
   })

  }


  updateProduct(){
    this.prodService.updateProduct(this.product).subscribe(data=>{
       this.getAllProducts();
    })
  }


  getData(type){
    if(type=='products'){
      this.selectedMenu='products';
      this.getAllProducts();
       this.showProductData=true;
      this.showOrderData=false;

    }
    else{
      this.selectedMenu='orders';
      this.showProductData=false;
      this.showOrderData=true;

      this.getAllOrders();

    }
  }
    
  

  deleteProduct(currentProduct){
    this.prodService.deleteProduct(currentProduct).subscribe(data=>{
      alert("product deleted successfully")
     this.getAllProducts();
    })
  }

}
