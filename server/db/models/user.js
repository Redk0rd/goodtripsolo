const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Tour, Comment, Equipment, Rating, Favorite }) {
      // this.belongsToMany(Tour, { through: Favorite, foreignKey: 'userId', as: 'favorites' });
      this.hasMany(Favorite, { foreignKey: 'userId', as: 'favorites'});
      this.hasMany(Comment, { foreignKey: 'userId' });
      this.belongsToMany(Tour, { through: 'Bookings', foreignKey: 'tourId', as: 'book' });
      this.hasMany(Tour, { foreignKey: 'authorId', as: 'author' });
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
