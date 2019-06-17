'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('test2s', [{
        firstName: 'John',
        lastName: 'Doe',
        bio: 'about Jon',
        imgURL: '/images/typewriter.jpg',
        contactInfo: 'jon@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Mike',
        lastName: 'Mikeson',
        bio: 'the best guy named Mike you ever met',
        imgURL: '/images/arthur.jpeg',
        contactInfo: 'mikemikeson@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('test2s', null, {});
  }
};
