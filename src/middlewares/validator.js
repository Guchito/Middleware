const {check, body} = require('express-validator');
const {userExist} = require('../helpers/helpers');
const path = require('path');
const bcrypt = require('bcryptjs');

module.exports = {
    register:  
    [
        check('email').notEmpty().withMessage('El e-mail es obligatorio').bail()
        .isEmail().withMessage('Ingresa un mail valido').bail(),
        body('email').custom( value => { return !userExist(value)}).withMessage('Usuario ya registrado').bail(),

        check('password').notEmpty().withMessage('La contraseña es obligatoria').bail()
        .isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres').bail(),
        body('password').custom( (value, {req}) => {
            if(!value == req.body.retype){
                return false
            }
            return true 
        }).withMessage('Las contraseñas no coinciden').bail(),

        check('retype').notEmpty().withMessage('Debe reingresar la contraseña'),

        body('avatar').custom((value, {req}) => {
            return req.file
        }).withMessage('Imagen obligatoria').bail()
        .custom((value, {req}) => {
            if(req.file != undefined){
                const aceptedExtensions = ['.jpg', '.jpeg', '.png'];
                const extension = path.extname(req.file.originalname);
                return aceptedExtensions.includes(extension)
            }
        }).withMessage('Las extensiones validas son jpg, jpeg y png')
    ],
    login: [
        check('email').notEmpty().withMessage('El campo email es obligatorio').bail()
        .isEmail().withMessage('Ingresa un mail valido').bail(),
        body('email').custom((value, {req})=>{
            if(userExist(value)){
                if(bcrypt.compareSync(req.body.password, userExist(value).password)){
                    return true;
                }
                return false;
            }
        }).withMessage('Mail o contraseña incorrectos').bail(),
        check('password').notEmpty().withMessage('El campo contraseña es obligatorio').bail(),

    ]

}

