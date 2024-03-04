const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Tour, Comment, Equipment, Rating }) {
      // this.belongsToMany(Tour, { through: 'Favourites', foreignKey: 'tourId' });
      this.hasMany(Comment, { foreignKey: 'userId' });
      this.belongsToMany(Tour, { through: 'Bookings', foreignKey: 'tourId' });
      // this.hasMany(Tour, { foreignKey: 'authorId' });
      this.hasMany(Equipment, { foreignKey: 'userId' });
      this.hasMany(Rating, { foreignKey: 'likedId', as: 'Liked' });
      this.hasMany(Rating, { foreignKey: 'likerId', as: 'Liker' });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      about: DataTypes.TEXT,
      phone: DataTypes.STRING,
      telegram: DataTypes.STRING,
      pathImg: DataTypes.STRING,
      isPro: DataTypes.BOOLEAN,
      isAdmin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
