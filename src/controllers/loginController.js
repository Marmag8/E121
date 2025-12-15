const userModel = require('../models/userModel');
const { compare } = require('../data/hash');

async function getLoginForm(req, res) {
    res.render('pages/login', { error: null });
}

async function postLogin(req, res) {
    try {
        const { username, password } = req.body;
        
        const user = await userModel.getUserByUsername(username);
        
        if (!user) {
            return res.render('pages/login', { error: 'Nieprawidłowa nazwa użytkownika lub hasło' });
        }
        
        const match = await compare(password, user.password);
        if (!match) {
            return res.render('pages/login', { error: 'Nieprawidłowa nazwa użytkownika lub hasło' });
        }
        
        req.session.userId = user._id.toString();
        req.session.username = user.username;
        res.redirect('/');
    } catch (err) {
        console.error('Login error:', err);
        return res.render('pages/login', { error: 'Nieprawidłowa nazwa użytkownika lub hasło' });
    }
}

async function getRegisterForm(req, res) {
    res.render('pages/register', { errors: [] });
}

async function postRegister(req, res) {
    try {
        const { username, password } = req.body;

        const isLongEnough = /^.{8,}$/;
        const hasUppercase = /[A-Z]/;
        const hasNumber = /[0-9]/;
        const hasSpecialChar = /[^A-Za-z0-9]/;
        const errors = [];

        if (!isLongEnough.test(password)) {
            errors.push('Hasło musi zawierać co najmniej 8 znaków');
        } 

        if (!hasUppercase.test(password)) {
            errors.push('Hasło musi zawierać co najmniej jedną dużą literę');
        } 

        if (!hasNumber.test(password)) {
            errors.push('Hasło musi zawierać co najmniej jedną cyfrę');
        } 

        if (!hasSpecialChar.test(password)) {
            errors.push('Hasło musi zawierać co najmniej jeden znak specjalny');
        }

        if (errors.length > 0) {
            return res.render('pages/register', { errors: errors });
        }
        
        const existing = await userModel.getUserByUsername(username);
        
        if (existing) {
            return res.render('pages/register', { errors: ['Użytkownik o tej nazwie już istnieje'] });
        }
        
        await userModel.createUser(username, password);
        
        const user = await userModel.getUserByUsername(username);
        req.session.userId = user._id.toString();
        req.session.username = user.username;
        res.redirect('/');
    } catch (err) {
        console.error('Registration error:', err);
        return res.render('pages/register', { errors: ['Wystąpił błąd podczas rejestracji. Spróbuj ponownie.'] });
    }
}

function logout(req, res) {
    req.session.destroy();
    res.redirect('/login');
}

module.exports = { getLoginForm, postLogin, getRegisterForm, postRegister, logout };
