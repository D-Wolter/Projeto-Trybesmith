import { Request, Response } from 'express';
import orderService from '../service/order.service';

const orderController = {
  async getAllOrders(req: Request, res: Response): Promise<Response> {
    const { type, data } = await orderService.getAllOrders();
    
    return res.status(type).json(data);
  },
};

export default orderController;