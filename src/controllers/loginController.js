const userModel = require('../models/userModel');
const { compare } = require('../data/hash');

async function getLoginForm(req, res) {
    res.render('pages/login', { error: null });
}

async function postLogin(req, res) {
    const { username, password } = req.body;
    
    const user = await userModel.getUserByUsername(username);
    
    if (!user) {
        return res.render('pages/login', { error: 'Nieprawidłowa nazwa użytkownika lub hasło' });
    }
    
    try {
        const match = await compare(password, user.password);
        if (!match) {
            return res.render('pages/login', { error: 'Nieprawidłowa nazwa użytkownika lub hasło' });
        }
    } catch (err) {
        return res.render('pages/login', { error: 'Nieprawidłowa nazwa użytkownika lub hasło' });
    }
    
    req.session.userId = user._id.toString();
    req.session.username = user.username;
    res.redirect('/');
}

async function getRegisterForm(req, res) {
    res.render('pages/register', { error: null });
}

async function postRegister(req, res) {
    const { username, password } = req.body;
    
    const existing = await userModel.getUserByUsername(username);
    
    if (existing) {
        return res.render('pages/register', { error: 'Użytkownik o tej nazwie już istnieje' });
    }
    
    await userModel.createUser(username, password);
    
    const user = await userModel.getUserByUsername(username);
    req.session.userId = user._id.toString();
    req.session.username = user.username;
    res.redirect('/');
}

function logout(req, res) {
    req.session.destroy();
    res.redirect('/login');
}

module.exports = { getLoginForm, postLogin, getRegisterForm, postRegister, logout };
