const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate(models) {
      // define association here
    }
  }
  Favorite.init(
    {
      userId: DataTypes.INTEGER,
      tourId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Favorite',
    },
  );
  return Favorite;
};
