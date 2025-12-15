const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/login', loginController.getLoginForm);
router.post('/login', loginController.postLogin);
router.get('/register', loginController.getRegisterForm);
router.post('/register', loginController.postRegister);
router.get('/logout', loginController.logout);

module.exports = router;
