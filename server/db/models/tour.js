const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tour extends Model {
    static associate({ User, Comment, CategoryTour }) {
      this.belongsToMany(User, { through: 'Favorites', foreignKey: 'tourId', as: 'favorites' });
      this.hasMany(Comment, { foreignKey: 'tourId' });
      this.belongsToMany(User, { through: 'Bookings', foreignKey: 'userId', as: 'book' });
      this.belongsTo(User, { foreignKey: 'authorId', as: 'author' });
      this.belongsTo(CategoryTour, { foreignKey: 'catTId' });
    }
  }
  Tour.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      catTId: DataTypes.INTEGER,
      pathImg: DataTypes.STRING,
      location: DataTypes.STRING,
      date: DataTypes.STRING,
      endDate: DataTypes.STRING,
      places: DataTypes.INTEGER,
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Tour',
    },
  );
  return Tour;
};
