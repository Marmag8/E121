const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController');
const { auth } = require('../middleware/auth');

router.get('/', auth, recipesController.getAll);
router.get('/new', auth, recipesController.getAddForm);
router.post('/new', auth, recipesController.postAdd);
router.get('/edit/:id', auth, recipesController.getEditForm);
router.post('/edit/:id', auth, recipesController.postEdit);
router.post('/delete/:id', auth, recipesController.deleteRecipe);
router.get('/show/:id', auth, recipesController.showRecipe);

module.exports = router;