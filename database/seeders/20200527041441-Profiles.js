'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Profiles', [
      {
        name: 'administrador',
        description: 'Usuário administrador'
      }, 
      {
        name: 'cliente',
        description: 'Usuário cliente'
      }
    ], {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Profiles', null, {})
  }
}
