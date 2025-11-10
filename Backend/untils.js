
const jwt = require('jsonwebtoken');

/** -------------------------------------------------------------------
 * |                    GENERATED TOKEN WHIT JWT                       |
 *  ------------------------------------------------------------------- 
 */
function generateToken(user) {
  const payload = {
    id: user.id,
    email: user.emailClient,
    role: user.rolUserClient
  };

  return jwt.sign(payload, process.env.JWT_SECRET||"clave_temporal",{ expiresIn: "24h" });
}

/** -------------------------------------------------------------------
 * |                 CLEAN AND SEND TO POSTMAN DATA                    |
 *  ------------------------------------------------------------------- 
 */

function getCleanUser(user) {
  if (!user) return null;

  return {
    id: user.id,
    nameClient: user.nameClient,
    usernameClient: user.usernameClient,
    emailClient: user.emailClient,
    rolUserClient: user.rolUserClient
  };
}

module.exports = { generateToken, getCleanUser };
