const getAllUsers = require('./getAllUsers')


module.exports = (email) => {
    const users = getAllUsers();
    const userOk = users.find(user => user.email == email);
    return userOk;
}