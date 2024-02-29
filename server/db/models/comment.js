const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Tour }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Tour, { foreignKey: 'tourId' });
    }
  }
  Comment.init(
    {
      title: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      tourId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Comment',
    },
  );
  return Comment;
};
