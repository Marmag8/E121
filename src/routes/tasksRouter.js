const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

router.get('/', tasksController.getAll);
router.get('/new', tasksController.getAddForm);
router.post('/new', tasksController.postAdd);
router.get('/edit/:id', tasksController.getEditForm);
router.post('/edit/:id', tasksController.postEdit);
router.post('/delete/:id', tasksController.deleteTask);

module.exports = router;