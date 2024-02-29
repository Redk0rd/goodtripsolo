const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      // define association here
    }
  }
  Booking.init(
    {
      userId: DataTypes.INTEGER,
      tourId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Booking',
    },
  );
  return Booking;
};
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      // define association here
    }
  }
  Booking.init(
    {
      userId: DataTypes.INTEGER,
      tourId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Booking',
    },
  );
  return Booking;
};
