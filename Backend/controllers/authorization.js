const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const utils = require('../untils');
const db = require('../models');
const client = db.Client;


exports.signin = (req, res) => {
    const email = req.body.emailClient;
    const password = req.body.passwordClient;

    if (!email || !password) {
        return res.status(400).json({ error: true, message: "Email and password are required" });
    }

    client.findOne({ where: { emailClient: emailClient } })
        .then(data => {
            const result = bcrypt.compareSync(password, data.passwordClient);
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

exports.isAuthenticated = async (req, res, next) => {
  try {
    // Obtener token del header Authorization
    let token = req.token;

    if (!token && req.headers.authorization) {
      const authHeader = req.headers.authorization;
      if (authHeader.startsWith("Bearer ")) {
        token = authHeader.slice(7, authHeader.length); // quitar "Bearer "
      }
    }

    if (!token) {
      return res.status(400).json({
        error: true,
        message: "Token is required"
      });
    }

    // Verificar token con la clave secreta
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Buscar usuario en la base de datos
    const user = await Client.findByPk(decoded.id);

    if (!user) {
      return res.status(401).json({
        error: true,
        message: "User not found"
      });
    }

    // Guardar usuario en la request
    req.user = user;
    next();

  } catch (err) {
    return res.status(401).json({
      error: true,
      message: "Invalid or expired token",
      details: err.message
    });
  }
};