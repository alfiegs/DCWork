let express = require('express');
let app = express();

const promise = require('bluebird');

//step 1 configurations 

let initOptions = {
    promiseLib: promise
}

let config = {
    host: 'localhost',
    port: 5432,
    database: 'testDBApril2019',
    user: 'postgres'
}

//load and init pg-promise
let pgp = require('pg-promise')(initOptions);

//create the database instance:
let db = pgp(config);

// db.query('SELECT * FROM restaurants')
// .then((results) => {
  
//     results.forEach((record) => {
//       console.log(`id: ${record.id} name: ${record.name} category: ${record.category} `)
//     })
// })

// db.one('SELECT * FROM restaurants WHERE id = 1;')
// .then((result) => {
//   console.log(result.id, result.name, result.category)
// })

// db.result("INSERT INTO restaurants VALUES (DEFAULT, 'Pad Thai', 1)")
// .then((result) => {
//     for (let i in result){
//         console.log(result[i])
//     }
  
// })

// let name = 'Big Belly Burger; DROP TABLE RESTAURANTS';
// let name2 = "someting"

// let query = `INSERT INTO restaurants \
// VALUES (default, $1, $2)`;

// db.result(query, name, name2)

let server = app.listen(3000, (params) => {
  console.log(`listening on port 3000`)
})

server.on('close', () => {
    pgp.end();
})




