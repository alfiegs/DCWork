let express = require('express');
let router = express.Router();

router.get('/feedback', (req, res) => {
    res.render('feedback')
})

$(function(){
    $.getJSON('api', updateFeedback)
})

module.exports = router