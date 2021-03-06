const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  summary: { type: String, required: true },
  type: { type: String, required: true }
});

module.exports = model('Recipe', recipeSchema);