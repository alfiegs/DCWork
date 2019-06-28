let express = require('express');
let app = express();

//create public folder
app.use(express.static('public'))

app.set('view engine', 'ejs');
app.set('views', 'views');

//routes
app.use(require('./routes/index'))
app.use(require('./routes/newdish'))
app.use(require('./routes/dishes'))




//create server
app.listen(3000, () => {
    console.log('listening on port 3000');
})

