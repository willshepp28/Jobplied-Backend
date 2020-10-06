'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Job, { onDelete: "CASCADE"});
    }
  };
  User.init({
    firstname: {
      allowNull: false, 
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 30],
          msg: "Your firstname must be between 3 and 30 characters.  Please try again."
        }
      }
    },
    lastname: {
      allowNull: false, 
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 30],
          msg: "Your lastname  must be between 3 and 30 characters.  Please try again."
        }
      }
    },
    image_url: DataTypes.TEXT,
    password: {allowNull: false, type: DataTypes.TEXT}
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};