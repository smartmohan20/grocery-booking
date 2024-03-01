import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const GroceryItem = sequelize.define('GroceryItem', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'id',
  },
  owner: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'owner',
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'name',
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    field: 'price',
  },
  inventory: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'inventory',
  },
},
{
  tableName: 'grocery_items',
});

export default GroceryItem;
