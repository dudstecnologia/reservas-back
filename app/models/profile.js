'use strict'

module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, { 
    timestamps: false, 
    // tableName: 'profiles' 
  })
  Profile.associate = (models) => {
    // Profile.hasMany(models.User)
    // Profile.hasMany(models.User, { foreignKey: 'profile_id', as: 'Users' })
  }
  return Profile;
}