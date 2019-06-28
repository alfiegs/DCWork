'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('ideas', [{
        ideaName: 'Light Bulb',
        description: 'An app that brings your ideas to life',
        contributors: 'Alfie Tarek Chris Michael',
        imgURL: '/images/lightbulb.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ideaName: 'Facebook',
        description: 'An app to connect the world',
        contributors: 'Mark and the Winklevoss Twins',
        imgURL: '/images/fb.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ideaName: 'Twitter',
        description: 'An app to degrade public discourse into a pre-literate orgy of superficial slogans and petty insults',
        contributors: 'Jack',
        imgURL: '/images/twitter.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('ideas', null, {});
  }
};
