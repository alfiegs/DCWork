let express = require('express');
let app = express();
let port = 3000;


app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.static('public')); 
app.use(require('./routes/index'));
app.use(require('./routes/newEntry'));


app.listen(port, (params) => {
    console.log(`listening on port ${port}`)
})