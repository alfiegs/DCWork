//grabs express and create an instance
const express = require('express'); 
const app = express();
let port = 5000;

//sets view engine to ejs
app.set('view engine', 'ejs')
//set views folder to default views
app.set('views', 'views')

//set public as default
app.use(express.static('public'))

//importing info from those files
app.use(require('./routes/api.js'))
app.use(require('./routes/index.js'))


//sets up server
app.listen(port, ()=>{
    console.log(`listening on port: ${port}`)
})