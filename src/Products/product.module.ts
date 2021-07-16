import {Module} from '@nestjs/common';
import { ProductController } from './products.controller';
import { ProductService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './product.model';


@Module({
    imports:[
        MongooseModule.forFeature([{name: 'product' , schema: ProductSchema}]),
    ],
 controllers: [ProductController],
 providers: [ProductService],
})
export class ProductModule {}