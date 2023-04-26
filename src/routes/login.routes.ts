import express from 'express';
import loginController from '../controller/login.controller';

const loginRouter = express.Router();

loginRouter.post('/', loginController.login);

export default loginRouter;