const fs = require('fs');
const path = require('path');
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
    },
    userExist(value){
        const users = helper.getAllUsers();
        userExist = users.find(user => user.email == value);
        return userExist;
    }
}

module.exports = helper