import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private commonService:CommonService) { }
  name:string;
  ngOnInit() {
this.commonService.productData.subscribe(productName=>{
  // alert(productName);
  console.log("data from product page "+productName)
  this.name=productName;
})
  }
}
