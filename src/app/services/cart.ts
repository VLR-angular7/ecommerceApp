export class Cart {
    constructor(private product,public quantity){

    }
    
    total(){
        return this.product.price * this.quantity
    }
}
