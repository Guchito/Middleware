const getAllUsers = require('./getAllUsers');

module.exports = () => {
    const users = getAllUsers();
    return users.pop().id + 1;
}