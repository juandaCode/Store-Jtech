const faker = require('faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate () {
    //const { size } = req.query;
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        "id": faker.datatype.uuid(),
        "name": faker.commerce.productName(),
        "price": parseInt(faker.commerce.price()),
        "image": faker.image.imageUrl()
      });
  }
}
  create (data) {
    const {name, price, image} = data;
    const newProduct = {
      id: faker.datatype.uuid(),
      name, price, image
    }
    this.products.push(newProduct);
    return newProduct;
  }
  find () {
    return this.products;
  }
  findOne (id) {
    return this.products.find(product => product.id === id);
  }
  update (id, changes) {
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    } else {
    const product = this.products[index] ;
    this.products[index] = {
      ...product,
      ...changes
    };
    }
  }
  delete (id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.products.splice(index, 1);
    return {
      "message": "Product deleted",
      id
    }
  }
}

module.exports = ProductsService;
