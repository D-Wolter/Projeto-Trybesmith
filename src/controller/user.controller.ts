import { Request, Response } from 'express';
import userService from '../service/user.service';

const userController = {
  async createUser(req: Request, res: Response): Promise<Response> {
    const { type, data } = await userService.createUser(req.body);
    
    return res.status(type).json(data);
  },
};

export default userController;