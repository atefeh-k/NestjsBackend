import { Injectable,NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";
import { InjectModel } from "@nestjs/mongoose";
import { model, Model } from "mongoose";


@Injectable()
export class ProductService {
 private products: Product[] = [];

 constructor(@InjectModel('Product') private readonly productModel: Model<Product>,) {}

 async insertProduct(
     title: string,
     description: string,
     price: number,
     weight: number) {
     const prodId = Math.random().toString();
     const newProduct = new this.productModel ({
         title:title,
         description:description,
         price:price,
         weight:weight
        });
        const result = await newProduct.save();
        return result.id as string;
 }

     async getProducts(){
     const products = await this.productModel.find().exec();
        return products.map((prod) => ({
            id: prod.id,
            title: prod.title,
            description: prod.description,
            price:prod.price,
            weight:prod.weight }));
 }

  async getSingleProduct(productId: string){
     const product = await this.findProduct(productId);
     return {
         id: product.id,
         title: product.title,
         describe: product.description,
         price: product.price,
         weight:product.weight,
        };
 }
   async updateProduct(
     productId: string,
     title: string,
     desc: string,
     price: number,
     weight: number,
     ) {
    const updateProduct = await this.findProduct(productId);
    
    if(title){
        updateProduct.title = title;
    }
    if(desc){
        updateProduct.description = desc;
    }
    if(price){
        updateProduct.price = price;
    }
    if(weight){
        updateProduct.weight = weight;
    }
    updateProduct.save();
 }
 async deleteProduct(prodId:string) {
   const result = await this.productModel.deleteOne({_id: prodId}).exec();
    if (result.n === 0){
        throw new NotFoundException('could not find product to delete.');
    }
}
 private async findProduct(id: string): Promise<Product> {
     let product;
     try {
      product = await this.productModel.findById(id).exec;

     }catch (error){
         throw new NotFoundException('Could not find product.');
     }
    
    if (!product) {
        throw new NotFoundException('Could not find product.');
    }
    return product;
 }
}

