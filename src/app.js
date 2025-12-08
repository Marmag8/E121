const express = require('express');
const path = require('path');
const router = require('./routes/tasksRouter');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

module.exports = app;