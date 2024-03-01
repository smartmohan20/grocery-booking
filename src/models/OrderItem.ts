import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const OrderItem = sequelize.define('OrderItem', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'id',
  },
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'item_id',
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'order_id',
  }
},
{
  tableName: 'order_items',
});

export default OrderItem;
