'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('users', [{
        firstName: 'Alfie',
        lastName: 'Santos',
        email: 'alfie@dc.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Michael',
        lastName: 'Dao',
        email: 'mikey@dc.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Tarek',
        lastName: 'Beb',
        email: 'tarekt@dc.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Chris',
        lastName: 'Humphrey',
        email: 'chri@dc.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: '',
        lastName: '',
        email: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    

      return queryInterface.bulkDelete('users', null, {});
    
  }
};
