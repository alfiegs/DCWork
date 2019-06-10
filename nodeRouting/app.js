

let express = require('express');

let app = express()


let port = 3000



app.use(express.static('public'))


//route for homepage

app.get('/', (req, res)=>{
    res.send('Hello Alfie')
})

//route for About Us
app.get('/about', (req, res)=>{
    res.send('About Us at Digital Crafts')
})

app.get('/picture/?', (req, res)=>{ // literal matching - last character is optional (in this case the backslash)
    res.send('pictures')
})

app.get('/cat*', (req, res)=>{ // literal matching - anything you type after last letter takes you to same place
    res.send('anything you type after picture takes you here')
})

app.get('/dog(fancy)?', (req, res)=>{ //literal matching
    res.send('either first word or first word + word in parentheses takes you here')
})

app.get('/horse(*)?', (req, res)=>{ //literal matching
    res.send('either first word or first word + any other word takes you here')
})

app.get('/menu', (req, res)=>{
    let bbq = req.param('bbq')
    res.send(bbq)
})


//calculator - adds elements of url and displays them on page
app.get('/calculator', (req, res)=>{
    let a = req.param('a')
    let b = req.param('b')
    let c = parseInt(a) + parseInt(b);
    res.send(`the result of ${a} + ${b} is ${c}`)
})

app.get('/name/:fname', (req, res)=>{
    // let fn = req.param('fname')
    let fn = req.params.fname //same as above
    res.send(fn)
})


//calculator 2
app.get('/calc/:a/:b', (req, res)=>{
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    res.send(`${a + b}`)
})


//flights
app.get('/flights/:from-:to', (req, res)=>{
    res.send(`Departing: ${req.params.from}, Arriving: ${req.params.to}`)
})


app.get('/something', (req, res)=>{ 
    let shoe = req.query.shoe || "loafers"
    res.send(`${shoe}`) // q picks up anything in string after 'something?q='
})



app.get('/photos', (req, res)=>{
    let images = req.query.images;
    res.send(`<img src="${images}">`)
})

app.get('/photo', (req, res)=>{
    res.send(`<img scr="/images/pup.jpeg">`)
})






app.listen(port, ()=>{
    console.log(`listening on port: ${port}`)
}) 


