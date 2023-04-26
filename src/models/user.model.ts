import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
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
  async loginUser(username: string): Promise<IUser[]> {
    const [user] = await connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.users WHERE username = ?',
      [username],
    );
    return user as IUser[];
  },
};

export default userModel;