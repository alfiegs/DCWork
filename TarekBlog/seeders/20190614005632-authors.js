'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('authors', [{
        firstName: 'Arthur',
        lastName: 'Wan',
        bio: 'Arthur Wan is a badass author who happens to also be Author One',
        imgURL: '/images/arthur.jpeg',
        contactInfo: 'arthur_wan@badass.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        blogs_id: 6
      },
      {
        firstName: 'Danny',
        lastName: 'Tu',
        bio: 'Danny Tu is literally the vessel through which God speaks',
        imgURL: '/images/danny.jpeg',
        contactInfo: 'danny_tu@tootu4u.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        blogs_id: 7
      }], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('People', null, {});

    }
};
