//RENAME TABLE

// 'use strict';

// module.exports = {
//   up: (queryInterface, Sequelize) => {
    
//       // Add altering commands here.
//       // Return a promise to correctly handle asynchronicity.

//       return queryInterface.renameTable('tasks', 'newTask');
    
//   },

//   down: (queryInterface, Sequelize) => {
//       // Add reverting commands here.
//       // Return a promise to correctly handle asynchronicity.

//       return queryInterface.renameTable('newTask', 'tasks');
//   }
// };




//ADD COLUMN
// 'use strict';

// module.exports = {
//   up: (queryInterface, Sequelize) => {
    
//       // Add altering commands here.
//       // Return a promise to correctly handle asynchronicity.

//       return queryInterface.addColumn(
//         'tasks',
//         'descriptions',
//         Sequelize.STRING
//       );
    
//   },

//   down: (queryInterface, Sequelize) => {
//       // Add reverting commands here.
//       // Return a promise to correctly handle asynchronicity.

//       return queryInterface.removeColumn('tasks', 'descriptions');
//   }
// };


