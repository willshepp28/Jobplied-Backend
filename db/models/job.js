'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Job.hasMany(models.User, { onDelete: "CASCADE"})
    }
  };
  Job.init({
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    company_name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    company_description: DataTypes.TEXT,
    job_title: { allowNull: false, type:DataTypes.STRING},
    job_description: DataTypes.TEXT,
    notes: DataTypes.TEXT,
    pay_range: DataTypes.INTEGER,
    application_url: DataTypes.TEXT,
    date: DataTypes.DATE,
    posted: {defaultValue: false, type: DataTypes.BOOLEAN}
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};