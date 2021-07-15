import { Test, TestingModule } from "@nestjs/testing";
import { ProductService } from "src/Products/products.service";
import * as request from 'supertest';
import { AppModule } from '../app.module';
import { INestApplication, HttpService, HttpModule } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { of } from 'rxjs';




class serviceProductMock {
    insertProduct(title: string,
        description: string,
        price: number,
        weight: number){
            return {
             title: 'iphone12promax',
             description: 'The best iphone ever',
             price: 30,
             weight: 3,
           };
       }
       getSingleProduct(productId: string){
          return {
              id: 1,
              title: 'iphone12promax',
              description: 'The best iphone ever',
              price: 30,
              weight: 3,
             };
         }
       updateProduct(){

   };
};

describe('productService', () => {
    let app: TestingModule;
    let productService: ProductService;
   
    beforeAll(async () => {
      const ApiServiceProvider = {
        provide: ProductService,
        useClass: serviceProductMock,
      };
      app = await Test.createTestingModule({
        providers: [ProductService, ApiServiceProvider],
      }).compile();
      productService = app.get<ProductService>(ProductService);
    })});



    describe('AppController (e2e)', () => {
        let app: INestApplication;
        let httpService: HttpService;
    })

///beforeAll(async () => {
   ///const testAppModule: TestingModule = await Test.createTestingModule({
    /// imports: [AppModule, HttpModule],
    /// providers: [ApiService, StudentService],
  /// }).compile();

  /// app = testAppModule.createNestApplication();
   ///httpService = testAppModule.get<HttpService>(HttpService);
   ///await app.init();
/// });


    