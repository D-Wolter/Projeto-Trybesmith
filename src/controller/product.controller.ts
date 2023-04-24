import { Request, Response } from 'express';
import productService from '../service/product.service';

const productController = {
  async createProduct(req: Request, res: Response) {
    const product = req.body;
    const result = await productService.createProduct(product);

    return res.status(201).json(result);
  },
};

export default productController;