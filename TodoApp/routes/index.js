const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    //sends whatever is in the ejs file to the window
    res.render('pages/index')
})

router.post('/', (req, res) => {
    console.log('i posted');
})

module.exports = router;