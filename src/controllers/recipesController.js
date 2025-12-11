const recipesModel = require('../models/recipeModel');

async function getAll(req, res) {
    const name = req.query.name ?? "";
    const sort = req.query.sort ?? "newest";
    let recipes = await recipesModel.getAllRecipes(req.session.userId);
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(name.toLowerCase()));
    
    switch(sort) {
        case 'oldest':
            filteredRecipes.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            break;
        case 'a-z':
            filteredRecipes.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'z-a':
            filteredRecipes.sort((a, b) => b.title.localeCompare(a.title));
            break;
        case 'newest':
        default:
            filteredRecipes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            break;
    }
    
    res.render('pages/index', { recipes: filteredRecipes, name, sort });
}

async function getAddForm(req, res) {
    res.render('pages/new');
}

async function postAdd(req, res) {
    const { title, description, instructions } = req.body;
    await recipesModel.addRecipe(title, description, instructions, req.session.userId);
    res.redirect('/');
}

async function getEditForm(req, res) {
    const recipe = await recipesModel.getRecipeById(req.params.id, req.session.userId);
    res.render('pages/edit', { recipe });
}

async function postEdit(req, res) {
    const { title, description, instructions } = req.body;
    await recipesModel.updateRecipe(req.params.id, title, description, instructions, req.session.userId);
    res.redirect('/');
}

async function deleteRecipe(req, res) {
    await recipesModel.deleteRecipe(req.params.id, req.session.userId);
    res.redirect('/');
}

async function showRecipe(req, res) {
    const recipe = await recipesModel.getRecipeById(req.params.id, req.session.userId);
    res.render('pages/show', { recipe });
}
    
module.exports = { getAll, getAddForm, postAdd, getEditForm, postEdit, deleteRecipe, showRecipe };