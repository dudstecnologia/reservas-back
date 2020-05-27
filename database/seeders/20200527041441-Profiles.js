'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('profiles', [
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
    return queryInterface.bulkDelete('profiles', null, {})
  }
}
