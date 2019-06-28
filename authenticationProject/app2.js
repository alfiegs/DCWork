let express = require('express');
let cookieParser = require('cookie-parser');
let session = require('express-session');
let app = express();


//middleware - server receives request and then middleare and then request gets routed to handler
//applied to every route that it's above (viz. front page)
//session id created stored by browser in cookies
app.use(session({
    secret: 'my dog likes chicken',
    resave: false,
    cookie: {secure: false, maxAge: 14*24*60*60*1000} //expires in 14 days (times 24 hours, 60 seconds, etc.)
}))

app.get('/', (req, res) => {
    req.session.someAttribute = 'session on front page'
    res.send(req.session.someAttribute)
});

app.get('/about', (req, res) => {
    let retrieve = req.session.someAttribute;
    res.send(`about page ${retrieve}`)
});



app.listen(3000, (params) => {
    console.log('listening on 3000');
})