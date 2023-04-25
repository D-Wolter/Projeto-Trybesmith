import IProduct from '../interfaces/products.interface';
import productModel from '../models/product.model';

const productService = {
  async createProduct(product: IProduct) {
    const result = await productModel.createProduct(product);

    return result;
  },
  async getAllProducts(): Promise<IProduct[]> {
    const result = await productModel.getAllProducts();
    return result;
  },
};

export default productService;