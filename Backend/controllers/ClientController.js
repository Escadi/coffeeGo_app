const db = require("../models");
const Client = db.client;
const bcrypt = require("bcrypt");
const utils = require("../utils");

exports.create = async (req, res) => {
  try {
    if (!req.body.nameClient || !req.body.passwordClient || !req.body.emailClient) {
      return res.status(400).send({ message: "All fields are required" });
    }

    // Verificar si ya existe un cliente con el mismo email
    const existingClient = await Client.findOne({ where: { emailClient: req.body.emailClient } });
    if (existingClient) {
      return res.status(400).send({ message: "Email already registered" });
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(req.body.passwordClient, 10);

    // Crear el nuevo cliente
    const newClient = await Client.create({
      nameClient: req.body.nameClient,
      usernameClient: req.body.usernameClient,
      emailClient: req.body.emailClient,
      passwordClient: hashedPassword,
      rolUserClient: req.body.rolUserClient
    });

    // Generar token (si tienes utils)
    const token = utils ? utils.generateToken(newClient) : "token_demo";
    const userObj = utils ? utils.getCleanUser(newClient) : newClient;

    res.json({ user: userObj, access_token: token });

  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the client."
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Client.findAll();
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message || "Error retrieving clients." });
  }
};

exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const client = await Client.findByPk(id);
    if (!client) return res.status(404).send({ message: "Client not found" });
    res.send(client);
  } catch (err) {
    res.status(500).send({ message: err.message || "Error retrieving client." });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const [num] = await Client.update(req.body, { where: { id } });
    if (num === 1) {
      res.send({ message: "Client was updated successfully." });
    } else {
      res.send({ message: `Cannot update Client with id=${id}.` });
    }
  } catch (err) {
    res.status(500).send({ message: err.message || "Error updating client." });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const num = await Client.destroy({ where: { id } });
    if (num === 1) {
      res.send({ message: "Client was deleted successfully!" });
    } else {
      res.send({ message: `Cannot delete Client with id=${id}. Maybe not found.` });
    }
  } catch (err) {
    res.status(500).send({ message: err.message || "Error deleting client." });
  }
};




