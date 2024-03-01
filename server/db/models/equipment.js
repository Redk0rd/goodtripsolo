const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Equipment extends Model {
    static associate({ CategoryEquipment, User }) {
      this.belongsTo(CategoryEquipment, { foreignKey: 'catEId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Equipment.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      catEId: DataTypes.INTEGER,
      pathImg: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Equipment',
    },
  );
  return Equipment;
};
