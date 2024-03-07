const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate(models) {
      this.belongsTo(models.Tour, { foreignKey: 'tourId' });
      this.belongsTo(models.User, { foreignKey: 'userId' });
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
