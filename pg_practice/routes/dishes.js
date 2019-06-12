let express = require('express');
let router = express.Router();
let db = require('../db/database.js');
let bodyParser = require('body-parser')

router.get('/dishes', (req, res) => {
    db.query('SELECT * FROM restaurants')
    .then((results) => {
        //results is an array of objects
        res.render('dishes', {
            dishes: results //pass results (array of objects) to rendered page
        })
        .catch((params) => {
            res.send('error')
        })
    })
})

router.use(bodyParser.urlencoded({extended: false}));

router.post('/dishes', (req, res) => {
    //insert record into database
    let name = req.body.title;
    let description = req.body.description;
    let price = parseInt(req.body.price);
    let imgURL = req.body.imgURL;

    db.none('INSERT INTO restaurants (name, category, fooddescription, price, course, imgURL) values ($1, $2, $3, $4, $5, $6)', 
    [name, 1, description, price, "", imgURL])
    .then((data) => {
        db.query('SELECT * FROM restaurants')
        .then((results) => {
            //results is an array of objects
            res.render('dishes', {
                dishes: results //pass results (array of objects) to rendered page
            })
            .catch((params) => {
                res.send('error')
            })
        })
    })


})

router.get('/newdish', (req, res) => {
    res.render('newdish')
})

module.exports = router;