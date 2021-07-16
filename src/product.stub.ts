
import { product} from 'dist/src/Products/product.model';
import { resolveAny } from 'dns';


export const productStub = (): product => {
 return {
    id:"123",
    title: 'iphone12',
    describtion: 'test desc',
    price: 200,
    weight: 2,
  }
}

