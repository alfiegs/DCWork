let express = require('express');
let app = express();

let port = 3000;

//set up public folder
app.use(express.static('public'));


//set view engine, we are going to use EJS view engine
//npm install ejs (command to install ejs)
app.set('view engine', 'ejs');
//first is standard, second is what we called folder
app.set('views', 'views')



app.use(require('./routes/index'))
app.use(require('./routes/speakers'))






app.listen(port, ()=>{
console.log(`listening on port ${port}`);
})


