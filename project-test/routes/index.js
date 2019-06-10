let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser')

router.get('', (req, res) => {
    res.render('index')
})

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json())




router.post('', (req, res) => {
    console.log(`name: ${req.body.name}, email: ${req.body.email}, mobile: ${req.body.mobile}`);
    console.log(req.body);
    res.send('inside of post')
})

module.exports = router




//body parser