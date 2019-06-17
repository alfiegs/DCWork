'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('blogs', [{
        title: 'My First Blog Post',
        abstract: 'A summary of the blog post that I just wrote.',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cumque, quas numquam cupiditate officia, voluptatibus molestiae iste accusamus itaque commodi provident porro, at iure dicta esse aspernatur ab molestias qui.',
        isPublished: false,
        imgURL: '/images/typewriter.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Blog Post 2',
        abstract: 'This post is way better than the first.',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nihil. Laboriosam eum maxime voluptates facere? Hic consequuntur illo impedit tempore beatae, porro dolores ab! Impedit natus cum numquam sint laborum?.',
        isPublished: false,
        imgURL: '/images/bear.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('blogs', null, {});
  }
};
