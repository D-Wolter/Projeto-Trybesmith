import jwt from 'jsonwebtoken';
import userModel from '../models/user.model';
import IUser from '../interfaces/users.interface';

const { JWT_SECRET } = process.env;

const userService = {
  async createUser(user: IUser): Promise<{ type: number, data: { token: string } }> {
    const newUser = await userModel.createUser(user);
    const token = jwt.sign(newUser.username, JWT_SECRET as string);
  
    return { type: 201, data: { token } };
  },
};

export default userService;