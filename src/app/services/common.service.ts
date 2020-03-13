import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
productData= new Subject<string>();

sendData(productName) {
  this.productData.next(productName);
}

}
