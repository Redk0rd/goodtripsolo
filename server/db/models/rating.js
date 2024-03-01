const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'likedId', as: 'Liked' });
      this.belongsTo(User, { foreignKey: 'likerId', as: 'Liker' });
    }
  }
  Rating.init(
    {
      ratingValue: DataTypes.INTEGER,
      likedId: DataTypes.INTEGER,
      likerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Rating',
    },
  );
  return Rating;
};
