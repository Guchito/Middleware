const helper = require('../helpers/helpers')

const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');


module.exports = {
    showRegister: (req, res) => {
        return res.render('user/user-register-form');
    },
    processRegister: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.render('user/user-register-form', {errors:errors.mapped(), email: req.body.email}) // me lo manda mappeado y lo puedo encontrar errors.email.msg, etc
        }
        const user = {
            id: helper.generateNewId(),
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: req.file.filename   
        }
        helper.writeUser(user);
        return res.redirect('/user/login')

    },
    showLogin: (req, res) => {
        
        return res.render('user/user-login-form');
    },
    processLogin: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.render('user/user-login-form', {errors:errors.mapped(), email: req.body.email})
        }
        
        return res.send('Do the magic');
    },
    showProfile: (req, res) => {
        return res.render('user/profile');
    },
    logout: (req, res) => {
        // Do the magic
        return res.redirect('/');
    }

}

// A ver