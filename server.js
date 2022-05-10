const express = require('express')
const {engine} = require('express-handlebars');

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Set db
require('./data/recipe-db');

require('./controllers/recipes')(app);

app.listen(3000);