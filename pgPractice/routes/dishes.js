let express = require('express')
let router = express.Router();
let db = require('../db/database.js');
let bodyParser = require('body-parser')

//display list of dishes onto page
router.get('/dishes', (req,res) => {

    db.query('SELECT * from restaurants')
    .then((results) => {
      //results is ans array of objects
        res.render('dishes', {
            dishes: results
        })
    })
    .catch((params) => {
      res.send('error')
    })
  
})

router.use(bodyParser.urlencoded({extended: false}));

router.post('/dishes', (req, res) => {
  
    //insert record into database
    let name = req.body.title;
    let description = req.body.description;
    let price = parseInt(req.body.price);
    let imageURL = req.body.imgURL;
    let category = parseInt(req.body.category);

    console.log(`category id ${category}`)
    db.none('INSERT INTO restaurants (name,category, fooddescription, price, course, imageurl) values ($1, $2, $3, $4, $5, $6)', 
    [name, category, description, price, "", imageURL])
    .then((data) => {
      
        db.query('SELECT * from restaurants')
        .then((results) => {
        //results is an array of objects
            res.render('dishes', {
                dishes: results
            })
        })
        .catch((params) => {
        res.send('error')
        })
    }) 

})

router.get('/newdish', (req, res) => {
  
    db.query('SELECT * FROM categories')
    .then((results) => {
      res.render('newdish', {
          categories: results
      })
    })
    .catch((error)=>{
        res.send(error)
    })
    
})



module.exports = router;