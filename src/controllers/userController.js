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
            return res.render('user/user-register-form', {errors:errors.errors})
        }else{
            const user = {
                id: helper.generateNewId(),
                email: req.body.email,
                password: req.body.password,
                avatar: req.files[0].filename   
            }
            helper.writeUser(user);
            return res.redirect('/')
        }

    },
    showLogin: (req, res) => {
        // Do the magic
        return res.send('Do the magic');
    },
    processLogin: (req, res) => {
        // Do the magic
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