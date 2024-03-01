const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CategoryEquipment extends Model {
    static associate({ Equipment }) {
      this.hasMany(Equipment, { foreignKey: 'catEId' });
    }
  }
  CategoryEquipment.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'CategoryEquipment',
    },
  );
  return CategoryEquipment;
};
