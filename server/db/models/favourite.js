const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    static associate(models) {
      // define association here
    }
  }
  Favourite.init(
    {
      userId: DataTypes.INTEGER,
      tourId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Favourite',
    },
  );
  return Favourite;
};
