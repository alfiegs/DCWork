let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.use(require('./routes/dishes'));

let server = app.listen(3000, () => {
  console.log('listenign on port 3000')
})

server.on('close', () => {
  //clean up
})
