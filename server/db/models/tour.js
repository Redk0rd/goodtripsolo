const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tour extends Model {
    static associate({ User, Comment, CategoryTour }) {
      // this.belongsToMany(User, { through: 'Favourites', foreignKey: 'userId' });
      this.hasMany(Comment, { foreignKey: 'tourId' });
      // this.belongsToMany(User, { through: 'Bookings', foreignKey: 'userId' });
      this.belongsTo(User, { foreignKey: 'authorId' });
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
