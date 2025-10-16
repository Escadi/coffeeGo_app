const db = require("../models");
const Client = db.client;
const Op = db.Sequelize.Op;


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
        emailClient: req.body.emailClient
    };


    Client.create(client)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while creating the Client."
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
                    err.message || "Some error ocurred while creating the client."
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




