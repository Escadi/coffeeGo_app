const db = require("../models");
const Client = db.client;
const bcrypt = require("bcrypt");
const utils = require("../untils.js");


/** -------------------------------------------------------------------
 * |                CREATE USER WHIT BCRYPT PASSWORD                   |
 *  ------------------------------------------------------------------- 
 */

exports.create = async (req, res) => {

  try {
    const email = req.body.emailClient || req.body.email;
    const password = req.body.passwordClient || req.body.password;
    
    console.log("Creating client with email:", email);
    console.log("Creating client with password:", password);

    if (!email || !password) {
      return res.status(400).send({ message: "Email and password are required" });
    }

    const existingClient = await Client.findOne({ where: { emailClient: email } });
    if (existingClient) {
      return res.status(400).send({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newClient = await Client.create({
      nameClient: req.body.nameClient,
      usernameClient: req.body.usernameClient,
      emailClient: email,
      passwordClient: hashedPassword,
      rolUserClient: req.body.rolUserClient

    });

    const token = utils.generateToken(newClient);
    const userObj = utils.getCleanUser(newClient);

    res.json({ user: userObj, access_token: token });
    
    console.log("Client created successfully:", newClient);
    console.log("Generated token:", token);

  } catch (err) {
    res.status(500).send({ message: err.message || "Error creating client." });
  }
  
};


/** -------------------------------------------------------------------
 * |            GET FOR ALL CLIENTS AND FIND ONE CLIENT               |
 *  ------------------------------------------------------------------- 
 */
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
/** -------------------------------------------------------------------
 * |                          UPDATE CLIENT                            |
 *  ------------------------------------------------------------------- 
 */
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

/** -------------------------------------------------------------------
 * |                            DELETE CLIENT                         |
 *  ------------------------------------------------------------------- 
 */

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




