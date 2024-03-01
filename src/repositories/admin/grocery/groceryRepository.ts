import GroceryItemModel from '../../../models/GroceryItem';

// Method to add grocery item
export const addGroceryItem = async (owner: number, name: string, price: number, inventory: number) : Promise<any> => {
    try {
        let objRes = {
            statusCode: 400,
            message: 'Failed to add grocery item!',
            data: {},
            errors: []
        };

        const groceryItem = await GroceryItemModel.create(
            {
                name: name,
                price: price,
                inventory: inventory,
                owner: owner,
            });
        
        if (groceryItem) {
            objRes.statusCode = 201;
            objRes.message = 'Grocery item added successfully!';
            objRes.data = groceryItem;
        }

        return objRes;
    } catch (err) {
        console.error('Exception occured in "addGroceryItem" method of "groceryRepository"!', err);
    }
};

// Method to get grocery items
export const getGroceryItems = async (owner: number) : Promise<any> => {
    try {
        let objRes = {
            statusCode: 400,
            message: 'Failed to get grocery items!',
            data: {},
            errors: []
        };

        const groceryItems = await GroceryItemModel.findAll({
            where: {
              owner: owner,
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

// Method to remove grocery item
export const removeGroceryItem = async (owner: number, id: number) : Promise<any> => {
    try {
        let objRes = {
            statusCode: 400,
            message: 'Failed to remove grocery item!',
            data: {},
            errors: []
        };

        const groceryItem = await GroceryItemModel.destroy({
            where: {
                id: id,
                owner: owner
            }});
        
        if (groceryItem) {
            objRes.statusCode = 200;
            objRes.message = 'Grocery item removed successfully';
        }

        return objRes;
    } catch (err) {
        console.error('Exception occured in "removeGroceryItem" method of "groceryRepository"!', err);
    }
};

// Method to update grocery item
export const updateGroceryItem = async (owner: number, id: number, name: string, price: number, inventory: number) : Promise<any> => {
    try {
        let objRes = {
            statusCode: 400,
            message: 'Failed to update grocery item!',
            data: {},
            errors: []
        };

        const groceryItem = await GroceryItemModel.update(
            {
                name: name,
                price: price,
                inventory: inventory,
                owner: owner
            },
            {
                where: {
                    id: id,
                    owner: owner
                }
            });
        
        if (groceryItem) {
            objRes.statusCode = 200;
            objRes.message = 'Grocery item updated successfully!';
        }

        return objRes;
    } catch (err) {
        console.error('Exception occured in "updateGroceryItem" method of "groceryRepository"!', err);
    }
};

// Method to update inventory
export const updateInventory = async (owner: number, id: number, inventory: number) : Promise<any> => {
    try {
        let objRes = {
            statusCode: 400,
            message: 'Failed to update inventory!',
            data: {},
            errors: []
        };

        const groceryItem = await GroceryItemModel.update(
            {
                inventory: inventory
            },
            {
                where: {
                    id: id,
                    owner: owner
                }
            });
        
        if (groceryItem) {
            objRes.statusCode = 200;
            objRes.message = 'Grocery item inventory updated successfully!';
        }

        return objRes;
    } catch (err) {
        console.error('Exception occured in "updateInventory" method of "groceryRepository"!', err);
    }
};
