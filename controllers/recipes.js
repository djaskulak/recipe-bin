//const Recipe = require('../models/recipe');

const Recipe = require('../models/recipe')

module.exports = (app) => {
  // HOME
  app.get('/', (req, res) => {
    res.render('home')
  })

  // RECIPES
  app.get('/recipes', (req, res) => {
    Recipe.find({}).lean()
      .then((recipes) => res.render('recipes-index', { recipes }))
      .catch((err) => {
        console.log(err.message);
      })
  })

  // CREATE
  app.post('/recipes/new', (req, res) => {
    // INSTANTIATE INSTANCE OF RECIPE MODEL
    const recipe = new Recipe(req.body);

    // SAVE INSTANCE OF POST MODEL TO DB AND REDIRECT TO THE ROOT
    recipe.save(() => res.redirect('/'));
  });

  // NEW RECIPE
  app.get('/recipes/new', (req, res) => {
    res.render('recipes-new')
  })

  // LOOK UP THE RECIPE
  app.get('/recipes/:id', (req, res) => {
    Recipe.findById(req.params.id).lean()
      .then((recipe) => res.render('recipes-show', { recipe }))
      .catch((err) => {
        console.log(err.message);
      });
  });

  // TYPE
  app.get('/n/:type', (req, res) => {
    Recipe.find({ type: req.params.type }).lean()
      .then((recipes) => res.render('recipes-index', { recipes }))
      .catch((err) => {
        console.log(err);
      });
  });
};