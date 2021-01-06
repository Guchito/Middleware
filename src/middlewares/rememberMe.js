const getAllUsers = require('../helpers/getAllUsers');

module.exports = function(req, res, next) {
    if (req.cookies.user){
        req.session.user = getAllUsers().find(user => user.email == req.cookies.user);
    }
    next()

}