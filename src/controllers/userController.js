const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const generateNewId = require('../helpers/generateNewId')
const writeUser = require('../helpers/writeUser')


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
            id: generateNewId(),
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: req.file.filename   
        }
        writeUser(user);
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
        req.session.user = req.body.email;

        if (req.body.remember == 'on'){
            res.cookie('user', req.body.email, { maxAge: 1000 * 60 * 60 * 24 });
        }        
        
        return res.redirect('/');
    },
    showProfile: (req, res) => {
        return res.render('user/profile');
    },
    logout: (req, res) => {
        if(req.cookies.user){
            res.clearCookie('user');
        }
        req.session.destroy();
        
        return res.redirect('/');
    }
    
}