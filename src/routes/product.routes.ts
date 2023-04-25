import { Router } from 'express';
import productController from '../controller/product.controller';

const productRouter = Router();

productRouter.get('/', productController.getAllProducts);
productRouter.post('/', productController.createProduct);

export default productRouter;