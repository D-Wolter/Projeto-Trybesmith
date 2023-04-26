import { Router } from 'express';
import userController from '../controller/user.controller';
import userValidation from '../middleware/user.validation';

const userRouter = Router();

userRouter.post(
  '/',
  userValidation.verifyUserName,
  userValidation.verifyPassword,
  userValidation.verifyVocation,
  userValidation.verifyLevel,
  userController.createUser,
);

export default userRouter;