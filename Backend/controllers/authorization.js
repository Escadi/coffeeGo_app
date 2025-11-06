const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const utils = require('../utils');
const db = require('../models');
const client = db.Client;


exports.signin = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(400).json({ error: true, message: "Email and password are required" });
    }

    client.findOne({ where: { email: client } })
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

exports.isAuthenticated = (req, res, next) => {

    var token = req.token;
    if (!token) {
        return res.status(400).json({
            error: true,
            message: "Token is required."
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
        if (err) return res.status(401).json({
            error: true,
            message: "Invalid token."
        });

        client.findByPk(Client.id)
            .then(data => {

                if (!user.id) {
                    return res.status(401).json({
                        error: true,
                        message: "Invalid user."
                    });
                }

                next();
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving User with id=" + id
                });
            });
    });

};