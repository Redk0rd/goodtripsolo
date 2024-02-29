const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CategoryTour extends Model {
    static associate({ Tour }) {
      this.hasMany(Tour, { foreignKey: 'catTId' });
    }
  }
  CategoryTour.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'CategoryTour',
    },
  );
  return CategoryTour;
};
