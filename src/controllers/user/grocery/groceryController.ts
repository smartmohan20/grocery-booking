import { Request, Response } from 'express';
import { ISErrorRes, IIErrorRes } from '../../common/common';
import { getAvailableItems } from '../../../repositories/user/grocery/groceryRepository';

// Controller to get available grocery items
export const getAvailableItemsController = async (req: Request, res: Response) : Promise<void> => {
  try {
    let objGetRes = ISErrorRes;
    const { userId } = req.body;
    if (userId) {
      const objGetItemsRes = await getAvailableItems();
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
