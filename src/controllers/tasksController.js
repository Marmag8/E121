const tasksModel = require('../models/taskModel');

async function getAll(req, res) {
    const tasks = await tasksModel.getAllTasks();
    res.render('pages/index', { tasks });
}

async function getAddForm(req, res) {
    res.render('pages/new');
}

async function postAdd(req, res) {
    const { title, content, status } = req.body;
    await tasksModel.addTask(title, content, status);
    res.redirect('/');
}

async function getEditForm(req, res) {
    const task = await tasksModel.getTaskById(req.params.id);
    res.render('pages/edit', { task });
}

async function postEdit(req, res) {
    const { title, content, status } = req.body;
    await tasksModel.updateTask(req.params.id, title, content, status);
    res.redirect('/');
}

async function deleteTask(req, res) {
    await tasksModel.deleteTask(req.params.id);
    res.redirect('/');
}

module.exports = { getAll, getAddForm, postAdd, getEditForm, postEdit, deleteTask };