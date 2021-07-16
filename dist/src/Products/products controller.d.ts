import { ProductService } from './products.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    addproduct(prodTitle: string, prodDesc: string, prodPrice: number): void;
}
