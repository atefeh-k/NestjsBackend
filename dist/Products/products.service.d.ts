import { product } from "./product.model";
export declare class ProductService {
    products: product[];
    insertProduct(title: string, describtion: string, price: number): void;
}
