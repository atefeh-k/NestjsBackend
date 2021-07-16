import { Controller , Post , Body , Get , Param , Patch, Delete} from "@nestjs/common";
import { ProductService} from './products.service';


@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
     async addproduct
    (@Body('title') prodTitle: string,
     @Body('description') prodDesc: string,
      @Body('price') prodPrice: number,
      @Body('weight') prodWeight: number
    ) {
        const generatedID = await this.productService.insertProduct(
            prodTitle,
            prodDesc,
            prodPrice,
            prodWeight
            );
            return {id: generatedID};
    }
    @Get()
    async getAllProducts() {
        const products = await this.productService.getProducts();
        return products;
    }

    @Get('id')
    getProduct(@Param('id') prodId: string , ){
        return this.productService.getSingleProduct(prodId);
        
    }
    @Patch(':id')
    async updateProduct(
    @Param('id') prodId: string, 
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
     @Body('price') prodPrice: number,
     @Body('weight') prodWeight: number,) {
         await this.productService.updateProduct(prodId, prodTitle, prodDesc, prodPrice, prodWeight);
         return null;
     }
     @Delete(':id')
      async removeProduct(@Param('id') prodId: string) {
         await this.productService.deleteProduct(prodId);
         return null;
     }
     }
