
const path = require('path');
const route = require('./routes')
const express = require('express')
const morgan = require('morgan')
const { engine } = require ('express-handlebars');
const app = express()
const port = 3000
// Use static folder
app.use(express.static(path.join(__dirname, 'public')));
const db = require('./config/db');
//http logger
app.use(morgan('combined'))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// template engine
     app.engine('hbs', engine({
  extname: '.hbs'
}));
//connect Database

db.connect();

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources','views'));
console.log(path.join(__dirname, 'resources/views/layouts'));
// route init
route(app);
app.listen(port, () => {
    console.log(`started at http://localhost:${port}`);
  });