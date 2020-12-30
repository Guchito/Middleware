const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const multer = require('multer');

const file = path.join(__dirname, '../data/users.json');


const helper = {
    getAllUsers() {
        return JSON.parse(fs.readFileSync(file, 'utf-8'));
    },

    generateNewId() {
        const users = helper.getAllUsers();
        return users.pop().id + 1;
    },

    writeUser(user) {
        const users = helper.getAllUsers();
        const usersToSave = [...users, user];
        const userToJson = JSON.stringify(usersToSave, null, " ");
        fs.writeFileSync(file, userToJson);
    }
}

module.exports = helper