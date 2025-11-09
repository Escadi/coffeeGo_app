var jwt = require('jsonwebtoken');

exports.generateToken = function (user) {
    if(!user) return null;

    var myUser = {
        id: user.id,
        nameClient: user.nameClient,
        usernameClient: user.usernameClient,
        emailClient: user.emailClient,
        passwordClient: user.passwordClient,
        rolUserClient: user.rolUserClient
    };
    return jwt.sign(myUser, process.env.JWT_SECRET, {
        expiresIn: 60*60*24 // expires in 24 hours
    });
};