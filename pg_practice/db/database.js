// if a file needs access to db, just import this file so you don't have to do this 12 times for 12 routes

let promise = require('bluebird');

//init options
let initOptions = {
    promiseLib: promise
}

let config = {
    host: 'local host',
    port: 5432,
    database: 'testDB',
    user: 'postgres'
}

let pgp = require('pg-promise')(initOptions);

let db = pgp(config);

module.exports = db;

