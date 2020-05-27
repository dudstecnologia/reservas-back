'use strict'

module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, { 
    timestamps: false, 
    tableName: 'profiles' 
  })
  Profile.associate = (models) => {
    Profile.hasMany(models.User)
    // Profile.belongsTo(models.User, {foreignKey: 'profile_id', as: 'users'})
  }
  return Profile;
}