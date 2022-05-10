const express = require('express')
const {engine} = require('express-handlebars');

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// HOME
app.get('/', (req, res) => {
  res.render('home');
});

// NEW RECIPE
app.get('/recipes/new', (req, res) => {
  res.render('recipes-new')
})

// Set db
require('./data/recipe-db');

require('./controllers/recipes')(app);

app.listen(3000);