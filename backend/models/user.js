'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

  //   static associate({Event}) {
  //     User.hasMany(Event, { foreignKey: 'user_id' });
  // }

  };
  User.init({
    user_id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false,
    tableName: 'users'

  });
  return User;
};