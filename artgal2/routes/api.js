let express = require('express');
let router = express.Router();
let feedbackData = require('../data/feedback.json')


router.get('/api', (req, res) => {
    res.json(feedbackData)
})


module.exports = router