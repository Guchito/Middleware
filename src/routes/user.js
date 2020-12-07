const express = require('express');
const router = express.Router();
const {check, body} = require('express-validator');
const fs = require('fs');

const userController = require('../controllers/userController');

// Muestra la vista de registro
router.get('/register',  userController.showRegister);

// Procesa la vista de registro
router.post('/register', [check('email').isEmail().withMessage('No pusiste un mail valido'),
    body('email').custom(function(value){
        const users = JSON.parse(fs.readFileSync('/../database/users.json', 'utf-8'));
        const usersExist = users.find((user)=>{
            return users.email == value
        })
        return usersExist ? true : false;

        }).withMessage('Usuario ya existe'),
    check('password').isLength({ min: 6 }).withMessage('Minmo 6 caracteres'),
    
    ] , userController.processRegister);

// Muestra la vista de login
router.get('/login', userController.showLogin);

// Procesa la vista de login
router.post('/login', userController.processLogin);

// Muestra el perfil del usuario
router.get('/profile', userController.showProfile);

// Cierra la sesión
router.get('/logout', userController.logout);

module.exports = router;