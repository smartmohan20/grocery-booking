import express from 'express';
import * as userController from '../../controllers/user/userController';
import groceryRoutes from '../user/grocery/groceryRoutes';
import orderRoutes from '../user/order/orderRoutes';

const userRouter = express.Router();

userRouter.post('/signup', userController.signupController);
userRouter.post('/login', userController.loginController);

// Mount the grocery item routes under "/user/grocery"
userRouter.use('/grocery', groceryRoutes);

// Mount the order routes under "/user/order"
userRouter.use('/order', orderRoutes);

export default userRouter;
