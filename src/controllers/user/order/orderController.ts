import { Request, Response } from 'express';
import { ISErrorRes, IIErrorRes } from '../../common/common';
import { bookItems, getOrder } from '../../../repositories/user/order/orderRepository';

// Controller to book multiple grocery items in a single order
export const bookItemsController = async (req: Request, res: Response) : Promise<void> => {
  try {
    let objRes = ISErrorRes;
    const { userId, items } = req.body;
    if (userId && items) {
      const objBookRes = await bookItems(userId, items);
      if (objBookRes && objBookRes.statusCode) {
        objRes = objBookRes;
      }
    } else {
      objRes = IIErrorRes;
    }

    // Send response with status code
    res.status(objRes.statusCode).json(objRes);
  } catch (err) {
    console.error('Exception occured in "bookItemsController" method of "orderController"!', err);
  }
};

// Controller to get order
export const getOrderController = async (req: Request, res: Response) : Promise<void> => {
  try {
    let objRes = ISErrorRes;
    const { id } = req.params;
    const { userId } = req.body;
    if (userId && id) {
      // Convert id to number
      const numericId: number = parseInt(id, 10);
      const objGetRes = await getOrder(userId, numericId);
      if (objGetRes && objGetRes.statusCode) {
        objRes = objGetRes;
      }
    } else {
      objRes = IIErrorRes;
    }

    // Send response with status code
    res.status(objRes.statusCode).json(objRes);
  } catch (err) {
    console.error('Exception occured in "getOrderController" method of "orderController"!', err);
  }
};
