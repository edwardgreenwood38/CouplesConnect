'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {

    static associate(models) {
      // define association here
    }
  }

  Event.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Event',
    timestamps: false,
    tableName: 'events',
  });

  return Event;
};