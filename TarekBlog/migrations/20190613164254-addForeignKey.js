'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'authors',
        'blogs_id', 
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'blogs', 
            key: 'id'
          }
        }
      )
      .then(queryInterface.addColumn(
        'comments',
        'blogs_id', 
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'blogs', 
            key: 'id'
          }
        }
      ))
      .then(queryInterface.addColumn(
        'blogs',
        'categories_id', 
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'categories', 
            key: 'id'
          }
        }
      ))
      .then(queryInterface.addColumn(
        'blogs',
        'authors_id', 
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'authors', 
            key: 'id'
          }
        }
      ))
      .then(queryInterface.addColumn(
        'blogs',
        'comments_id', 
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'comments', 
            key: 'id'
          }
        }
      ))
  },

  down: (queryInterface, Sequelize) => {
      return 
        queryInterface.removeColumn('authors', 'blogs_id')
        .then(queryInterface.removeColumn('comments', 'blogs_id'))
        .then(queryInterface.removeColumn('blogs', 'categories_id'))
        .then(queryInterface.removeColumn('blogs', 'comments_id'))
        .then(queryInterface.removeColumn('blogs', 'authors_id'))
  }
};