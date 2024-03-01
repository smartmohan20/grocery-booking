import OrderModel from '../../../models/Order';
import OrderItemModel from '../../../models/OrderItem';
import GroceryItemModel from '../../../models/GroceryItem';
import { Op } from 'sequelize';

// Method to book items
export const bookItems = async (userId: number, items: any[]) : Promise<any> => {
    try {
        let objRes = {
            statusCode: 400,
            message: 'Failed to book items!',
            data: {},
            errors: []
        };

        if (items && items.length > 0) {
            const order = await OrderModel.create(
                {
                    user: userId
                }
            );

            let orderItems = [];
            if (order) {
                const intOrderId = order.dataValues.id;
                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    const itemId = item.id;
                    const quantity = item.quantity;
                    for (let j = 0; j < quantity; j++) {
                        const orderItem = await OrderItemModel.create(
                            {
                                item_id: itemId,
                                order_id: intOrderId
                            }
                        );
    
                        if (orderItem) {
                            orderItems.push(orderItem);
                        }
                    }
                }

                // Calculate the total quantity
                const totalQuantity = items.reduce((accumulator, currentObject) => {
                    return accumulator + (currentObject.quantity || 0);
                }, 0);

                if (orderItems.length === totalQuantity) {
                    objRes.statusCode = 200;
                    objRes.message = 'Items booked successfully!';
                    objRes.data = { orderItems: orderItems };
                }
            }
        }

        return objRes;
    } catch (err) {
        console.error('Exception occured in "addGroceryItem" method of "orderRepository"!', err);
    }
};

// Method to get order
export const getOrder = async (userId: number, id: number) : Promise<any> => {
    try {
        let objRes = {
            statusCode: 400,
            message: 'Failed to get order!',
            data: {},
            errors: []
        };

        const order = await OrderModel.findOne({
            where: {
                id: id,
                user: userId
            }
        });

        if (order) {
            const orderItems = await OrderItemModel.findAll({
                where: {
                    order_id: id
                }
            });

            const arrItemIds = orderItems.map((orderItem) => {
                return orderItem.dataValues.item_id;
            });

            if (arrItemIds.length > 0) {
                const items = await GroceryItemModel.findAll({
                    where: {
                        id: {
                          [Op.in]: arrItemIds
                        }
                      }
                });

                if (items) {
                    objRes.statusCode = 200;
                    objRes.message = 'Order fetched successfully!';
                    objRes.data = { order: order, orderItem: orderItems, items: items };
                }
            }
        }

        return objRes;
    } catch (err) {
        console.error('Exception occured in "getOrder" method of "orderRepository"!', err);
    }
};
