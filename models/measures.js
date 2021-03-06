'use strict';

module.exports = (sequelize, DataTypes) => {
  const Measure = sequelize.define('measures', {
    id: { 
      type: DataTypes.INTEGER, 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },    
    varietyId: {
      type: DataTypes.INTEGER,
      allowNull: false,           
    },
    isObverse: DataTypes.BOOLEAN,
    type: DataTypes.STRING(20),
    measureNumber: DataTypes.INTEGER,
    distance: DataTypes.FLOAT,
    angle: DataTypes.FLOAT
  }, {});
  Measure.associate = (models) => {        
    Measure.belongsTo(models.varieties);
  };
  return Measure;
};