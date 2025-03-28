import express from 'express';
import { loginUser, registerUsers } from '../controllers/userController.js';

const userRouter = express.Router();

// Route to register a user
userRouter.post('/register', registerUsers);

// Route to login a user
userRouter.post('/login', loginUser);


export default userRouter;
