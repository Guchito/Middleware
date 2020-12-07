const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');

const file = path.join(__dirname, '../data/users.json');

function getAllUsers() {
	return JSON.parse(fs.readFileSync(file, 'utf-8'));
}

function generateNewId() {
	const users = getAllUsers();
	return users.pop().id + 1;
}

function writeUser(user) {
	const users = getAllUsers();
	const usersToSave = [...users, user];
	const userToJson = JSON.stringify(usersToSave, null, " ");
	fs.writeFileSync(file, userToJson);
}



module.exports = {
    showRegister: (req, res) => {
        return res.render('user/user-register-form');
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()){
            return res.render('user/user-register-form', {errors: errors.errors})
        }
        const users = getAllUsers();

        return res.send('Do the magic');
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