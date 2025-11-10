const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const utils = require('../untils');
const db = require('../models');
const Client = db.client;

/** -------------------------------------------------------------------
 * |              EXPORT FOR LOGIN USER IN (LOGIN_USER)                |
 *  ------------------------------------------------------------------- 
 */
exports.signin = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(400).json({ error: true, message: "Email and password are required" });
    }

    Client.findOne({ where: { emailClient: email } })
        .then(data => {
            const result = bcrypt.compareSync(password, data.password);
            if (!result) return res.status(401).send('Password not valid!');


            const token = utils.generateToken(data);

            const userObj = utils.getCleanUser(data);

            return res.json({ user: userObj, access_token: token });

        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};
/** -------------------------------------------------------------------
 * |              AUTHENTIFACTION BEARER TO CREATE TOKEN               |
 *  ------------------------------------------------------------------- 
 */
exports.isAuthenticated = (req, res, next) => {

    var token = req.token;
    if (!token) {
        return res.status(400).json({
            error: true,
            message: "Token is required."
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) return res.status(401).json({
            error: true,
            message: "Invalid token."
        });
        try {
            const foundUser = await Client.findByPk(decoded.id)
            if (!foundUser) {
                return res.status(401).json({
                    error: true,
                    message: "Invalid user."
                });
            }
            req.user = foundUser;
            next();
        } catch (error) {
            return res.status(500).json({
                error: true,
                message: "Error retrieving user."
            });
        }
    });


};