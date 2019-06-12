//npm install express pg-promise bluebird

//Query Database Using JS

let express = require('express');
let app = express();

const promise = require('bluebird'); //promise library like Axios, fetch, etc.

//STEP 1 - Configurations

let initOptions = {
    promiseLib: promise,
}

let config = {
    host: 'localhost',
    port: 5432, //default port for Postgres
    database: 'testDB',
    user: 'postgres'
}


//STEP 2 - Load and initialize PG-Promise

let pgp = require('pg-promise')(initOptions);


// Create database instance:

let db = pgp(config);





// //Query from database (testdb)

// db.query('SELECT * FROM restaurants')
// .then((results) => { //results will be the results from SELECT query will be passed here (array of objects(records)) -- 
//     results.forEach((record) => { //forEach parameter (record) is iterator
//         console.log(`id: ${record.id}, name: ${record.name}, category: ${record.category}`);
//     })
// })

// Query Methods
//db.one - returns one item, not an array

// db.one('SELECT * FROM restaurants WHERE id = 1')
// .then((result) => { //only one result returned
//     console.log(result.id, result.name, result.category);
// })

//db.result
// db.result("INSERT INTO restaurants VALUES (DEFAULT, 'Pad Thai', 1)") //be careful with quotes here
// .then((result) => { //result is object that holds all information about this insert
//     console.log(result);
// })


let name = 'Big Bell Burger';
let query = `INSERT INTO restaurants \
VALUES (defult, $1, $2)`; // backslash above means continue on a new line
//$1 protects against hackers injecting queries into your code (like DROP DB)

db.result(query, name, name2) //each of these substitutes for VALUES above



//close connection when using pg-promise

//server
let server = app.listen(3000, (params) => {
    console.log('listening on port 3000');
})

//event listener on server, when it closes, it ends pgp
server.on('close', () => {
    pgp.end();
})