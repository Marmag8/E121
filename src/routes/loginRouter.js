const express = require('express');
const router = express.Router();
const authController = require('../controllers/loginController');

router.get('/login', authController.getLoginForm);
router.post('/login', authController.postLogin);
router.get('/register', authController.getRegisterForm);
router.post('/register', authController.postRegister);
router.get('/logout', authController.logout);

module.exports = router;
