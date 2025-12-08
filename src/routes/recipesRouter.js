const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController');

router.get('/', recipesController.getAll);
router.get('/new', recipesController.getAddForm);
router.post('/new', recipesController.postAdd);
router.get('/edit/:id', recipesController.getEditForm);
router.post('/edit/:id', recipesController.postEdit);
router.post('/delete/:id', recipesController.deleteRecipe);
router.get('/show/:id', recipesController.showRecipe);

module.exports = router;