import express from 'express';
import * as adminController from '../../controllers/admin/adminController';
import groceryRoutes from '../admin/grocery/groceryRoutes';

const adminRouter = express.Router();

adminRouter.post('/signup', adminController.signupController);
adminRouter.post('/login', adminController.loginController);

// Mount the grocery item routes under "/admin/grocery"
adminRouter.use('/grocery', groceryRoutes);

export default adminRouter;
