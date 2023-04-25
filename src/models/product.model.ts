import { ResultSetHeader } from 'mysql2/promise';
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
      ...product,
    };
  
    return created;
  },
  async getAllProducts(): Promise<IProduct[]> {
    const query = 'SELECT * FROM Trybesmith.products;';
    const [result] = await connection.execute(query);

    return result as IProduct[];
  },

};

export default productModel;