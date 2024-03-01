import express from 'express';
import authenticate from '../../../middlewares/authenticate';
import * as groceryController from '../../../controllers/admin/grocery/groceryController';

const groceryRouter = express.Router();

// Use the authenticate middleware
groceryRouter.use(authenticate);

groceryRouter.post('/add', groceryController.addGroceryItemController);
groceryRouter.get('/get-all', groceryController.getGroceryItemsController);
groceryRouter.delete('/remove/:id', groceryController.removeGroceryItemController);
groceryRouter.put('/update/:id', groceryController.updateGroceryItemController);
groceryRouter.put('/update-inventory/:id', groceryController.updateInventoryController);

export default groceryRouter;
