const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Tour, Comment, Equipment }) {
      this.belongsToMany(Tour, { through: 'Favourites', foreignKey: 'tourId' });
      this.hasMany(Comment, { foreignKey: 'userId' });
      this.belongsToMany(Tour, { through: 'Bookings', foreignKey: 'tourId' });
      this.hasMany(Tour, { foreignKey: 'authorId' });
      this.hasMany(Equipment, { foreignKey: 'userId' });
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
