import { Op } from 'sequelize';
import { GroceryItem } from '../../../models/Models';

// Method to get available grocery items
export const getAvailableItems = async () : Promise<any> => {
    try {
        let objRes = {
            statusCode: 400,
            message: 'Failed to get available grocery items!',
            data: {},
            errors: []
        };

        const groceryItems = await GroceryItem.findAll({
            where: {
                inventory: {
                    [Op.gt]: 0 // Using Sequelize's greater than (>) operator
                }
            },
        });

        if (groceryItems) {
            objRes.statusCode = 200;
            objRes.message = 'Grocery items fetched successfull!';
            objRes.data = groceryItems;
        }

        return objRes;
    } catch (err) {
        console.error('Exception occured in "getGroceryItems" method of "groceryRepository"!', err);
    }
};
