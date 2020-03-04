export class Cart {
    constructor(private product,private quantity){

    }
    
    total(){
        return this.product.price * this.quantity
    }
}
