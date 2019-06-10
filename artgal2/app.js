
let express = require('express');
let app = express();
let port = 4000;



app.use(express.static('public')); 
app.set('view engine', 'ejs');
app.set('views', 'views');

app.locals.siteTitle = "Digital Crafts";
app.locals.pageTitle = "Digital Crafts";
app.locals.pageID = "Digital Crafts";
app.use(require('./routes/index'))
app.use(require('./routes/speakers'))
app.use(require('./routes/feedback'))
app.use(require('./routes/api'))


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

