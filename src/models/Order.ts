import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'id',
  },
  user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user',
  }
},
{
  tableName: 'orders',
});

export default Order;
