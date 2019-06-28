let express = require('express');
let app = express();
let session = require('express-session');
let bcrypt = require('bcryptjs');
let db = require('./models');
let bodyParser = require('body-parser')

let LocalStrategy = require('passport-local').Strategy;
let passport = require('passport')

let SequelizeStore = require('connect-session-sequelize')(session.Store)


let myStore = new SequelizeStore({
    db: db.sequelize
})


//setting up session
app.use(session({
    secret: 'cat',  //secret can be anything
    resave: false, //does not store new session for every new page
    proxy: true,
    store: myStore //where connect db with session
}))

myStore.sync();


app.set('view engine', 'ejs')
app.set('views', 'views')

//initialize Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({extended: false}))


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', passport.authenticate('local', {successRedirect: '/dashboard', failureRedirect: '/login'}))

app.get('/logout', (req, res) => {
    //destroy session
    req.session.destroy((err) => {
        if(err) return next(err)
            req.logout();
            res.redirect('/')
        
    })
})

app.get('/dashboard', (req, res) => {
    if(!req.isAuthenticated()){
        res.redirect('/login');
        return
    }
    res.send('youve arrived here so you must be authenticated')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', (req, res) => {
    //start using Passport in here
    let password = bcrypt.hashSync(req.body.password, 8) //taking password from login.ejs and combining with salt (random characters) and applying bcrypt algorithm to encrypt
    let username = req.body.username;

    db.user.create({username: username, password: password})
    .then((result) => {
        res.send('/login')
    })
    .catch((error) => {
        res.send('error');
    })
    res.render('postRegister')
})

passport.use(new LocalStrategy((username, password, done) => {
    console.log(`I'm in Passport`);
    db.user.findAll({where: {username: username}})
    .then((results) => {
        if(results != null){
            let record = results[0];

            bcrypt.compare(password, record.password, (err, response) => {
                if(response){
                    console.log('passwords matched');
                    //
                    done(null, {id: record.id, username: record.username})
                }
                else{
                    console.log('passwords didnt match')
                    done(null, false);
                }
            })
        }
        else{
            console.log('user not found')
            done(null, false)
        }
    })
}))

//adding validated user id to session (session created above)
passport.serializeUser((user, done) => {
    //passport is adding inforation userid to the sessions id
    done(null, user.id) //never store sensitive information in cookie (username, not password)
})

passport.deserializeUser((id, done) => {
    //takes cookie and checks it against database and deserializes session id 
    //id is from function above user.id
    db.user.findByPk(id)
    .then((record) => {
        done(null, record) //this is valid, rest of application can proceed
    })

})

app.listen(3000, () => {
    console.log('listening on port 3000');
})

