let express = require('express');
let router = express.Router();

router.get('/newEntry', (req, res) => {
  res.render('newEntry')
})

module.exports = router;