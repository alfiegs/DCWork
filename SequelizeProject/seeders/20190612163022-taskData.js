'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('tasks', [{
        title: 'Walk Dog',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },
      {
        title: 'Have Lunch',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2
      },
      {
        title: 'Plan Birthday Party',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3
      },
      {
        title: 'Walk Dog',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('tasks', null, {});

  }
};
