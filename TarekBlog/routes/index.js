let express = require('express');
let router = express.Router();
let db = require('../models');
let bodyParser = require('body-parser');



router.get('/', (req, res) => {
    db.test2.findAll()
        .then(records => {
            records.forEach(element => {
                console.log(element.id, element.title, element.body);
            })
            // console.log(records.data)

            // res.send('inside of findall')
          res.render('index', {
              test2s: records
          })
        })
        .catch((error) => {
          res.send(error)
        })})






router.use(bodyParser.urlencoded({ extended: false }))
router.post('/', (req, res) => {

    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let bio = req.body.bio;
    let imgURL = req.body.imgURL;
    let contact = req.body.contact;

    // console.log(req.body)

    // res.send('debugging')

    db.test2.create({firstName:firstName, lastName:lastName, bio:bio, imgURL:imgURL, contact:contact})
    .then((result) => {

        
        // db.dishes.findAll()
        // .then((r) => {
        //   console.log(r)
        // })
        db.test2.findAll()
        .then(records => {

            console.log(records)

            // res.send('inside of findall')
          res.render('index', {
              test2s: records
          })
        })
        .catch((error) => {
          res.send("there was an error")
        })
    })
  
})


module.exports = router