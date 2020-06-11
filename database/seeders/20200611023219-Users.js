'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const profile = await queryInterface.rawSelect('Profiles', {
      where: { name: 'administrador' }
    }, ['id'])

    const hash = bcrypt.hashSync('admin', bcrypt.genSaltSync(10))

    return queryInterface.bulkInsert('Users', [{
      name: 'Admin',
      email: 'admin@email.com',
      password: hash,
      profile_id: profile
    }], {})
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {})
  }
};
