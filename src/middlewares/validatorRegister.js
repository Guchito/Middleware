const {check, body} = require('express-validator');
const { getAllUsers } = require('../helpers/helpers');


module.exports = function (req, res, next) {
    [
        check('email').notEmpty().withMessage('El campo e-mail es obligatorio').bail()
        .isEmail().withMessage('Ingresa un mail valido').bail(),
        body('email').custom( value => {
            const users = getAllUsers();
            userExist = users.find(user => user.email == value);
            console.log(userExist);
            return !userExist;
        })
    ]

}

