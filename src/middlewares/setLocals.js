const { getAllUsers } = require('../helpers/helpers');

module.exports = (req, res, next) => {
    res.locals.user = false;
    if (req.session.user) {
        const allUsers = getAllUsers()
        user = allUsers.find( user => user.email == req.session.user);
        res.locals.user = user;
    }
    return next();
}