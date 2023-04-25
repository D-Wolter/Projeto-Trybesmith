import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import IOrder from '../interfaces/orders.interface';

const orderModel = {
  async getAllOrders(): Promise<IOrder[]> {
    const query = `SELECT orders.id, orders.user_id as userId, 
    JSON_ARRAYAGG(products.id) AS productsIds
    FROM Trybesmith.orders 
    INNER JOIN Trybesmith.products ON orders.id = products.order_id
    GROUP BY orders.id`;
    
    const [result] = await connection.execute<IOrder[] & RowDataPacket[]>(query);

    return result as IOrder[];
  },
};

export default orderModel;