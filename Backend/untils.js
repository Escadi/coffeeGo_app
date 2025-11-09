var jwt = require('jsonwebtoken');

function generateToken(user) {
  if (!user) return null;

  var u = {
    id: user.id,
    name: user.nameClient,
    username: user.usernameClient,
    email: user.emailClient,
    password: user.passwordClient,
    rolUser: user.rolUserClient
  };

  return jwt.sign(u, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24 // expires in 24 hours
  });
}

function getCleanUser(user) {
  if (!user) return null;

  return {
    id: user.id,
    name: user.nameClient,
    username: user.usernameClient,
    email: user.emailClient,
    password: user.passwordClient,
    rolUser: user.rolUserClient
  };
}

module.exports = {
  generateToken,
  getCleanUser
};