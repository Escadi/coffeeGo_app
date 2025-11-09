const db = require("../models");
const Client = db.client;
const untils = require("../utils");
const bcrypt = require("bcryptjs");


exports.create = (req, res) => {
    if (!req.body.nameClient) {
        res.status(400).send({
            message: "Contend can not be empty"
        });
        return;
    }
    const client = {
        nameClient: req.body.nameClient,
        usernameClient: req.body.usernameClient,
        emailClient: req.body.emailClient,
        passwordClient: req.body.passwordClient,
        rolUserClient: req.body.rolUserClient
    };


    Client.findOne({ where: { emailClient: client.emailClient } })
    .then(data => {
      if (data) {
        const result = bcrypt.compareSync(client.emailClient, data.emailClient);
        if (!result) return res.status(401).send('Password not valid!');
        const token = utils.generateToken(data);
        // get basic user details
        const userObj = utils.getCleanUser(data);
        // return the token along with user details
        return res.json({ user: userObj, access_token: token });
      }

      client.emailClient = bcrypt.hashSync(req.body.passwordClient);

      // User not found. Save new User in the database
      Client.create(user)
        .then(data => {
          const token = utils.generateToken(data);
          // get basic user details
          const userObj = utils.getCleanUser(data);
          // return the token along with user details
          return res.json({ user: userObj, access_token: token });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User."
          });
        });

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });

};


exports.findAll = (req, res) => {
    Client.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while show the client."
            })
        })
};


exports.update = (req, res) => {
    const id = req.params.id;

    Client.update(req.body, { 
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Client was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Client with id=${id}. Maybe Client was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while creating the bicycle."
            })
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;
    Client.destroy({ 
        where: { id: id }
 })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Client was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Client with id=${id}. Maybe Client was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while creating the bicycle."
            })
        });
};




