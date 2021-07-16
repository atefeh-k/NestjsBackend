import { Product } from "./product.model";
import { Model } from "mongoose";
export declare class ProductService {
    private readonly productModel;
    private products;
    constructor(productModel: Model<Product>);
    insertProduct(title: string, description: string, price: number, weight: number): Promise<string>;
    getProducts(): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
        weight: number;
    }[]>;
    getSingleProduct(productId: string): Promise<{
        id: string;
        title: string;
        describe: string;
        price: number;
        weight: number;
    }>;
    updateProduct(productId: string, title: string, desc: string, price: number, weight: number): Promise<void>;
    deleteProduct(prodId: string): Promise<void>;
    private findProduct;
}
