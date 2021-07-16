import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './app.module';
import { ProductController } from 'dist/Products/products controller';
import { AppService } from './app.service';
import { ProductSchema } from './Products/product.model';
import { ProductService } from './Products/products.service';
import { product } from 'dist/src/Products/product.model';
import {productStub} from './product.stub'

jest.mock('../users.service');

describe('ProductController', () => {
  let productController: ProductController;
  let productService: ProductService;


beforeEach(async () => {
  const products: TestingModule = await Test.createTestingModule({
    controllers: [ProductController],
    providers: [ProductService],
  }).compile();

  productController = products.get<ProductController>(ProductController);
  productService = products.get<ProductService>(ProductService);
  jest.clearAllMocks();
});

describe('addproduct', () => {
  describe('when addProduct is called', () => {
    let Product: product

    beforeEach(async () => {
      Product = await productController.addproduct("123","iphone12","test desc",200,2)  
    })

    test('then it should call productService', () => {
      expect(productService.insertProduct).toBeCalledWith("123","iphone12","test desc",200,2);
    })

    test('then is should return a product', () => {
      expect(Product).toEqual(productStub);
    })
  })
})


describe('getProduct', () => {
  describe('when getProduct is called', () => {
    let Product: product;

    beforeEach(async () => {
      Product = await productController.getProduct("123")  
    })

    test('then it should call productService', () => {
      expect(productService.getProducts).toBeCalledWith("123","iphone12","test desc",200,2);
    })

    test('then is should return a product', () => {
      expect(Product).toEqual(productStub);
    })
  })
})



describe('updateProduct', () => {
  describe('when updateProduct is called', () => {
    let Product: product;

    beforeEach(async () => {
      Product = await productController.updateProduct("123","iphone12","test desc",200,2)  
    })

    test('then it should call productService', () => {
      expect(productService.updateProduct).toBeCalledWith("123","iphone12","test desc",200,2);
    })

    test('then is should return a product', () => {
      expect(Product).toEqual(productStub);
    })
  })
})

