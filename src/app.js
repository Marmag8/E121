const express = require('express');
const path = require('path');   
const session = require('express-session');
const recipesRouter = require('./routes/recipesRouter');
const loginRouter = require('./routes/loginRouter');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 } // 24 godziny
}));

app.use((req, res, next) => {
    res.locals.user = req.session.username || null;
    next();
});

app.use('/', loginRouter);
app.use('/', recipesRouter);

module.exports = app;