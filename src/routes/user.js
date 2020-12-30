const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer')
const userController = require('../controllers/userController');
const validator = require('../middlewares/validator')

// Muestra la vista de registro
router.get('/register',  userController.showRegister);

// Procesa la vista de registro
router.post('/register', multer.single('avatar') , validator.register , userController.processRegister);

// Muestra la vista de login
router.get('/login', userController.showLogin);

// Procesa la vista de login
router.post('/login', userController.processLogin);

// Muestra el perfil del usuario
router.get('/profile', userController.showProfile);

// Cierra la sesión
router.get('/logout', userController.logout);

module.exports = router;