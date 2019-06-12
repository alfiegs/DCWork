const express = require('express');
const router = express.Router();
//importing data from JSON
const todo = require('../data/todo.json');

//get info and send to user
router.get('/api', (req, res)=>{
    //responds with json
    res.json(todo)
})

//give other files option to use it
module.exports = router;