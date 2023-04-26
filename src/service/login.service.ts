import userModel from '../models/user.model';
import authToken from '../utils/authToken';

const loginService = {
  async login(username: string, password: string) {
    if (!username) {
      return { type: 400, message: '"username" is required' };
    }
      
    if (!password) {
      return { type: 400, message: '"password" is required' };
    }
      
    const [user] = await userModel.loginUser(username);
    if (!user || user.password !== password) {
      return { type: 401, message: 'Username or password invalid' };
    }
      
    const token = authToken.generateToken(Number(user.id));
    return { type: 200, message: token };
  },
};

export default loginService;