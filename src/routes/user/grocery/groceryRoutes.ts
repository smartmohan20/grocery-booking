import express from 'express';
import authenticate from '../../../middlewares/authenticate';
import * as groceryController from '../../../controllers/user/grocery/groceryController';

const groceryRouter = express.Router();

// Use the authenticate middleware
groceryRouter.use(authenticate);

groceryRouter.get('/get-available-items', groceryController.getAvailableItemsController);

export default groceryRouter;
