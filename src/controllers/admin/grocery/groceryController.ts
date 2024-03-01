import { Request, Response } from 'express';
import { ISErrorRes, IIErrorRes } from '../../common/common';
import { addGroceryItem, getGroceryItems, removeGroceryItem, updateGroceryItem, updateInventory } from '../../../repositories/admin/grocery/groceryRepository';

// Controller to add grocery item
export const addGroceryItemController = async (req: Request, res: Response) : Promise<void> => {
  try {
    let objRes = ISErrorRes;
    const { userId, name, price, inventory } = req.body;
    if (userId && name && price && inventory) {
      const objAddRes = await addGroceryItem(userId, name, price, inventory);
      if (objAddRes && objAddRes.statusCode) {
        objRes = objAddRes;
      }  
    } else {
      objRes = IIErrorRes;
    }
    
    // Send response with status code
    res.status(objRes.statusCode).json(objRes);
  } catch (err) {
    console.error('Exception occured in "addGroceryItemController" method of "groceryController"!', err);
  }
};

// Controller to get grocery items
export const getGroceryItemsController = async (req: Request, res: Response) : Promise<void> => {
  try {
    let objGetRes = ISErrorRes;
    const { userId } = req.body;
    if (userId) {
      const objGetItemsRes = await getGroceryItems(userId);
      if (objGetItemsRes && objGetItemsRes.statusCode) {
        objGetRes = objGetItemsRes;
      }
    } else {
      objGetRes = IIErrorRes;
    }
    
    // Send response with status code
    res.status(objGetRes.statusCode).json(objGetRes);
  } catch (err) {
    console.error('Exception occured in "getGroceryItemsController" method of "groceryController"!', err);
  }
};

// Controller to remove grocery item
export const removeGroceryItemController = async (req: Request, res: Response) : Promise<void> => {
  try {
    let objRes = ISErrorRes;
    const { id } = req.params;
    const { userId } = req.body;
    if (id && userId) {
      // Convert id to number
      const numericId: number = parseInt(id, 10);
      const objRemoveRes = await removeGroceryItem(userId, numericId);
      if (objRemoveRes && objRemoveRes.statusCode) {
        objRes = objRemoveRes;
      }
    } else {
      objRes = IIErrorRes;
    }

    // Send response with status code
    res.status(objRes.statusCode).json(objRes);
  } catch (err) {
    console.error('Exception occured in "removeGroceryItemController" method of "groceryController"!', err);
  }
};

// Controller to update grocery item
export const updateGroceryItemController = async (req: Request, res: Response) : Promise<void> => {
  try {
    let objRes = ISErrorRes;
    const { id } = req.params;
    const { userId, name, price, inventory} = req.body;
    if (id && userId && name && price && inventory) {
      // Convert id to number
      const numericId: number = parseInt(id, 10);
      const objUpdateRes = await updateGroceryItem(userId, numericId, name, price, inventory);
      if (objUpdateRes && objUpdateRes.statusCode) {
        objRes = objUpdateRes;
      }
    } else {
      objRes = IIErrorRes;
    }

    // Send response with status code
    res.status(objRes.statusCode).json(objRes);
  } catch (err) {
    console.error('Exception occured in "updateGroceryItemController" method of "groceryController"!', err);
  }
};

// Controller to update inventory
export const updateInventoryController = async (req: Request, res: Response) : Promise<void> => {
  try {
    let objRes = ISErrorRes;
    const { id } = req.params;
    const { userId, inventory } = req.body;
    if (id && userId && inventory) {
      // Convert id to number
      const numericId: number = parseInt(id, 10);
      const objManageRes = await updateInventory(userId, numericId, inventory);
      if (objManageRes && objManageRes.statusCode) {
        objRes = objManageRes;
      }
    } else {
      objRes = IIErrorRes;
    }

    // Send response with status code
    res.status(objRes.statusCode).json(objRes);
  } catch (err) {
    console.error('Exception occured in "updateInventoryController" method of "groceryController"!', err);
  }
};
