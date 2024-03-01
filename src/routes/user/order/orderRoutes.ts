import express from 'express';
import authenticate from '../../../middlewares/authenticate';
import * as orderController from '../../../controllers/user/order/orderController';

const orderRouter = express.Router();

// Use the authenticate middleware
orderRouter.use(authenticate);

orderRouter.post('/book-items', orderController.bookItemsController);
orderRouter.get('/get/:id', orderController.getOrderController);

export default orderRouter;
