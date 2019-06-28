let db = require('./models') //importing models folder, pointing to index.js inside models


//FIND ALL
// db.user.findAll()
// .then((results) => { //results is results of SELECT ALL, it is an array of objects
//     results.forEach(record => {
//         console.log(record.id, record.firstName, record.lastName);
//     });
// })


//FIND BY ID
// db.user.findByPk(1)
// .then((record) => { //returns one record based on ID
//     // console.log(record); //returns entire object 
//     console.log(record.firstName, record.lastName) //returns just the values indicated by the keys
// })



//CREATE OBJECT
// db.user.create({firstName:'Eric', lastName:'Fisher', email:'eric@dc.com'})
// .then((user) => {
//     console.log(user); //gives info about what was created
// })



//FIND ALL WHERE
let user = db.user;

// user.findAll({where: {lastName: 'Fisher'}}) //finds all items where this is true
// .then((results) => { //array of objects that have Fisher as lastName
//     results.forEach(record => { 
//         console.log(record.firstName, record.lastName); //returns value for each object in array
//     });
// })


//DELETE RECORD
// user.destroy({where: {id: 5}}) //deletes ID you specify
// .then((rowDeleted) => {
//     if(rowDeleted == 1){
//         console.log('deleted successfully');
//     } 
// })


//RAW SEQUEL STATEMENTS  (n)
// db.sequelize.query('SELECT * FROM users', { type: sequelize.QueryTypes.SELECT}).then(results => {
//     results.forEach(function(record){
//         console.log(record.firstName);
//     })
//   });



// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// //UPDATE RECORD
// //retrieve record
// //then update record
// //then save changes

// let update;
// user.findByPk(1) //retrieves record
// .then((record) => { //promise returns record
//     update = record; //make record equal update
//     update.email = "alfie@santos.com"; //make new email
//     update.save().then((params) => { //save update
//         console.log('update successful');
//     })
// })
//
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



//PAGINATION

// user.findAll({where: {}, include: [], order: [], limit: integer})


// //returns only 2 records
// user.findAll({limit:2})
// .then((results) => {
//     results.forEach(record => {
//         console.log(record.firstName, record.lastName);
//     })
// })


// //returns only 2 records with offset 2
// user.findAll({limit:2, offset:2})
// .then((results) => {
//     results.forEach(record => {
//         console.log(record.firstName, record.lastName);
//     })
// })

// //returns all items in ASCending order
// user.findAll({order:[['lastName', 'ASC']]})
// .then((results) => {
//     results.forEach(record => {
//         console.log(record.firstName, record.lastName);
//     })
// })

// //returns all items in ASCending order with offset of 2
// user.findAll({offset: 2, order:[['lastName', 'ASC']]})
// .then((results) => {

//     results.forEach(record => {
//         console.log(record.firstName, record.lastName);
//     })
// })



//JOIN STATEMENT
//join together task and user (include key below)
// user.findAll({include: [{model: db.task}]})
// .then((records) => {
//     records.forEach(record => {
//         console.log(record.firstName, record.lastName);
//         record.tasks.forEach(element => {
//             console.log(` >${element.title}`);
//         });
//     });
// })

// user.findAll({include: [{model: db.task, require: false}]})
// .then((records) => {
//     records.forEach(record => {
//         console.log(record.firstName, record.lastName);
//         record.tasks.forEach(element => {
//             console.log(` >${element.title}`);
//         });
//     });
// })



//FILTER WITH WHERE STATEMENTS
//where inside include is in reference to user table. where inside of outer object is in reference to tasks
db.task.findAll({include: [{model: db.user, require: true}], where: {id:2}})
.then((records) => { //records = array of objects
    // console.log(records);
    records.forEach(record => {
        console.log(record.title, record.user.firstName);
    });
})