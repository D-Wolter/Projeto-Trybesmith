import { ResultSetHeader } from 'mysql2';
import IProduct from '../interfaces/products.interface';
import connection from './connection';

const productModel = {
  async createProduct(product: IProduct): Promise<IProduct> {
    const [row] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [product.name, product.amount],
    );
    
    const created = {
      id: row.insertId,
      name: product.name,
      amount: product.amount,
    };
  
    return created;
  }, 

};

export default productModel;