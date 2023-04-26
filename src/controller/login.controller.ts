import { Request, Response } from 'express';
import loginService from '../service/login.service';

const loginController = {
  async login(req: Request, res: Response) {
    const { username, password } = req.body;
    const { type, message } = await loginService.login(username, password);
    if (type === 400 || type === 401) {
      return res.status(type).json({ message });
    }
    return res.status(type).json({ token: message });
  },
};

export default loginController;