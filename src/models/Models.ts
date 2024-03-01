import Admin from './Admin';
import User from './User';
import Order from './Order';
import GroceryItem from './GroceryItem';
import OrderItem from './OrderItem';

// Define associations
Order.belongsTo(User, { foreignKey: 'user' });
User.hasMany(Order, { foreignKey: 'user' });
OrderItem.belongsTo(GroceryItem, { foreignKey: 'item_id' });
OrderItem.belongsTo(Order, { foreignKey: 'order_id' });

export { Admin, User, Order, GroceryItem, OrderItem };
