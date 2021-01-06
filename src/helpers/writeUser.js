const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../data/users.json');
const getAllUsers = require('./getAllUsers');

module.exports = (user) => {
    const users = getAllUsers();
    const usersToSave = [...users, user];
    const userToJson = JSON.stringify(usersToSave, null, " ");
    fs.writeFileSync(file, userToJson);
}