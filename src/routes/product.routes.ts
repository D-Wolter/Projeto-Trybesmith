import { Router } from 'express';
import productController from '../controller/product.controller';
import productMid from '../middleware/product.validation';

const productRouter = Router();

productRouter
  .get('/', productController.getAllProducts)
  .post('/', productMid.verifyName, productMid.verifyAmount, productController.createProduct);

export default productRouter;