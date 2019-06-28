'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('ideas', [{
        ideaName: 'Appetizer',
        description: 'An app to make you hungry',
        contributors: 'The Hamburgler',
        imgURL: '/images/hamburger.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ideaName: 'Appetizer',
        description: 'An app to make you hungry',
        contributors: 'The Hamburgler',
        imgURL: '/images/hamburger.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ideaName: 'Appetizer',
        description: 'An app to make you hungry',
        contributors: 'The Hamburgler',
        imgURL: '/images/hamburger.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ideaName: 'Appetizer',
        description: 'An app to make you hungry',
        contributors: 'The Hamburgler',
        imgURL: '/images/hamburger.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('ideas', null, {});
  }
};
