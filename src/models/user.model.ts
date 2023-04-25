import { ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/users.interface';
import connection from './connection';

const userModel = {
  async createUser(user: IUser): Promise<IUser> {
    const [{ insertId }] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)', 
      [user.username, user.vocation, user.level, user.password],
    );
    
    return { id: insertId, ...user };
  },
};

export default userModel;