const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CategoryEquipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
