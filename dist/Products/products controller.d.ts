import { ProductService } from './products.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    addproduct(prodTitle: string, prodDesc: string, prodPrice: number, prodWeight: number): Promise<{
        id: string;
    }>;
    getAllProducts(): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
        weight: number;
    }[]>;
    getProduct(prodId: string): Promise<{
        id: string;
        title: string;
        describe: string;
        price: number;
        weight: number;
    }>;
    updateProduct(prodId: string, prodTitle: string, prodDesc: string, prodPrice: number, prodWeight: number): Promise<any>;
    removeProduct(prodId: string): Promise<any>;
}
