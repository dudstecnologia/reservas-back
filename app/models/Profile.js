'use strict'

module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, { timestamps: false, tableName: 'profiles' })

  return Profile;
}