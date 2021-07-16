"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class serviceProductMock {
    insertProduct(title, description, price, weight) {
        return {
            title: 'iphone12promax',
            description: 'The best iphone ever',
            price: 30,
            weight: 3,
        };
    }
    getSingleProduct(productId) {
        return {
            id: 1,
            title: 'iphone12promax',
            description: 'The best iphone ever',
            price: 30,
            weight: 3,
        };
    }
    updateProduct() {
    }
    ;
}
//# sourceMappingURL=product.service.spec.js.map