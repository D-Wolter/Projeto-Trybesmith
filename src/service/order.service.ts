import orderModel from '../models/order.model';
import IOrder from '../interfaces/orders.interface';

const orderService = {
  async getAllOrders(): Promise<{ type: number, data: IOrder[] }> {
    const orders = await orderModel.getAllOrders();

    return { type: 200, data: orders };
  },
};
  
export default orderService;