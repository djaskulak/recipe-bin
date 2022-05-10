const Recipe = require('../models/recipe');

module.exports = (app) => {
  // CREATE
  app.post('/recipes/new', (req, res) => {
    // INSTANTIATE INSTANCE OF POST MODEL
    const recipe = new Recipe(req.body);

    // SAVE INSTANCE OF POST MODEL TO DB AND REDIRECT TO THE ROOT
    recipe.save(() => res.redirect('/'));
  });
};