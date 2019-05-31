let express = require('express');
let app = express();
// let index = require('./routes/index')

// app.use(index)

//without middleware: new request made --> run route handler
//witih middleware: new request is made --> middleware --> run route handler

// //middleware intercepts request to get to homepage before route executed and executes middleware function to send status message 
// app.use((req, res, next)=>{
//     // // res.status(503).send('this site is currently down')
//     // //or
//     // res.send('this site is currently down') //without status message type
// })

// app.use((req, res, next)=>{
//     console.log('im inside middleware');
// })



app.use(express.static('public')) //can get to css, js, images from just pathname (no public)

app.set('view engine', 'ejs'); //say which engine to use
app.set('views', 'views') //set views to folder called views


//middleware  has to be above everything else that we need to apply it to
//so this will apply to /home and /aboutus, which are below
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', "*"); 
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})



app.use(require('./routes/index')) //app has access to thing in index.js
app.use(require('./routes/about'))



app.listen(3000, () => {
    console.log(`listening on port 3000`);
})

















//mkdir - make a directory
//cd into it
//npm init
//npm install express
//enter through all the questions
//create app.js
//nodemon app.js --> this allows you to see changes without refresh
