import { Router } from 'express';
import {
  ctrlCreateUser,
  
} from '../controllers/user.controller.js';


const authRouter = Router();

//authRouter.post('/login', ctrlLoginUser);
authRouter.post('/register', ctrlCreateUser);

export { authRouter };