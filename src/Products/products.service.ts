import { Injectable,NotFoundException } from "@nestjs/common";
import { product } from "./product.model";

@Injectable()
export class ProductService {
 private products: product[] = [] ;

 insertProduct(title: string, describtion: string , price: number) {
     const prodId = Math.random().toString();
     const newProduct = new product (new Date().toString(), title, describtion, price )
     this.products.push(newProduct);
 }

 getProducts(){
     return [...this.products];
 }

 getSingleProduct(productId: string){
     const product = this.findProduct(productId) [0];
     return {...product};
 }
 updateProduct(productId: string, title: string, desc: string, price: number) {
    const [product, index] = this.findProduct(productId);
    const updateProduct = {...product};
    if(title){
        updateProduct.title = title;
    }
    if(desc){
        updateProduct.describtion = desc;
    }
    if(price){
        updateProduct.price = price;
    }
    this.products[index] = updateProduct;
 }
 private findProduct(id: string): [product, number]{
    const productIndex = this.products.findIndex (prod => prod.id === id);
    const product = this.products[productIndex];
    
    if (!product) {
        throw new NotFoundException('Could not find product.');
    }
    return [product, productIndex];
 }

 deleteProuct(prodId: string){
const index = this.findProduct(prodId) [1];
this.products.splice(index , 1);
 }
}