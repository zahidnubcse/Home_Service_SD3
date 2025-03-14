import express from 'express';
import { loginUser, registerUsers, adminLogin } from '../controllers/userController.js';

const userRouter = express.Router();

// Route to register a user
userRouter.post('/register', registerUsers);

// Route to login a user
userRouter.post('/login', loginUser);

// Route for admin login
userRouter.post('/admin', adminLogin);

export default userRouter;
