const recipesModel = require('../models/recipeModel');

async function getAll(req, res) {
    const recipes = await recipesModel.getAllRecipes();
    res.render('pages/index', { recipes });
}

async function getAddForm(req, res) {
    res.render('pages/new');
}

async function postAdd(req, res) {
    const { title, content, status } = req.body;
    await recipesModel.addRecipe(title, content, status);
    res.redirect('/');
}

async function getEditForm(req, res) {
    const recipe = await recipesModel.getRecipeById(req.params.id);
    res.render('pages/edit', { recipe });
}

async function postEdit(req, res) {
    const { title, content, status } = req.body;
    await recipesModel.updateRecipe(req.params.id, title, content, status);
    res.redirect('/');
}

async function deleteRecipe(req, res) {
    await recipesModel.deleteRecipe(req.params.id);
    res.redirect('/');
}

module.exports = { getAll, getAddForm, postAdd, getEditForm, postEdit, deleteRecipe };