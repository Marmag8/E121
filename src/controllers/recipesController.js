const recipeModel = require('../models/recipeModel');

async function getAll(req, res) {
    try {
        const name = req.query.name ?? "";
        const sort = req.query.sort ?? "newest";
        let recipes = await recipeModel.getAllRecipes(req.session.userId);
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
    } catch (err) {
        console.error('Error loading recipes:', err);
        res.status(500).render('pages/index', { recipes: [], name: '', sort: 'newest' });
    }
}

async function getAddForm(req, res) {
    res.render('pages/new');
}

async function postAdd(req, res) {
    try {
        const { title, description, instructions } = req.body;
        await recipeModel.addRecipe(title, description, instructions, req.session.userId);
        res.redirect('/');
    } catch (err) {
        console.error('Error adding recipe:', err);
        res.status(500).send('Błąd podczas dodawania przepisu');
    }
}

async function getEditForm(req, res) {
    try {
        const recipe = await recipeModel.getRecipeById(req.params.id, req.session.userId);
        if (!recipe) {
            return res.status(404).send('Przepis nie znaleziony');
        }
        res.render('pages/edit', { recipe });
    } catch (err) {
        console.error('Error loading recipe for edit:', err);
        res.status(500).send('Błąd podczas ładowania przepisu');
    }
}

async function postEdit(req, res) {
    try {
        const { title, description, instructions } = req.body;
        await recipeModel.updateRecipe(req.params.id, title, description, instructions, req.session.userId);
        res.redirect('/');
    } catch (err) {
        console.error('Error updating recipe:', err);
        res.status(500).send('Błąd podczas aktualizacji przepisu');
    }
}

async function deleteRecipe(req, res) {
    try {
        await recipeModel.deleteRecipe(req.params.id, req.session.userId);
        res.redirect('/');
    } catch (err) {
        console.error('Error deleting recipe:', err);
        res.status(500).send('Błąd podczas usuwania przepisu');
    }
}

async function showRecipe(req, res) {
    try {
        const recipe = await recipeModel.getRecipeById(req.params.id, req.session.userId);
        if (!recipe) {
            return res.status(404).send('Przepis nie znaleziony');
        }
        res.render('pages/show', { recipe });
    } catch (err) {
        console.error('Error loading recipe:', err);
        res.status(500).send('Błąd podczas ładowania przepisu');
    }
}
    
module.exports = { getAll, getAddForm, postAdd, getEditForm, postEdit, deleteRecipe, showRecipe };