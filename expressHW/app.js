

//Make an express program that will display "Hello, world!" at the root URL: /

var express = require('express');
var app = express();

app.get('/', (req, res)=>{
    res.send('Hello World')
})


//######################################################################################################


app.get('/cats', (req, res)=>{
    res.send('MEOW')
})


app.get('/dogs', (req, res)=>{
    res.send('WOOF')
})

app.get('/cats_and_dogs', (req, res)=>{
    res.send('Living Together')
})




//Route Parameters
//Adding to the same program, say a greeting to the user,
//given that the user's name is encoded inside the URL.
//For example, if you go to the URL


app.get('/greet/:name', (req, res)=>{
    let greeting = req.params.name
    res.send(`Hello, ${greeting}, you sexy thing!`)
})






//OUTPUT either "Hello World" or "Hello (name)"
app.get('/greeter', (req, res)=>{
    var name = req.query.name || 'world';
    res.send(`Hello ${name}!`)
})




//DISPLAY AGE
app.get('/year', (req, res)=>{
    var age = req.query.age;
    var year = (2019 - age)
    res.send(`You were born in ${year}`)
})







app.listen(8000, ()=>{
    console.log('listening on Port 8000')
})