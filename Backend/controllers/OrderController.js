const db = require("../models");
const Order = db.order;
const product = db.product;

  /**
   *  --------------------------------------------------------------
   * |                      CREATE ORDERS                           |
   *  --------------------------------------------------------------
   */
exports.create = (req, res) => {
    if (!req.body.statusOrder) {
        res.status(400).send({
            message: "Contend can not be empty"
        });
        return;
    }
    const order = {
        statusOrder: req.body.statusOrder,
        totalOrder: req.body.totalOrder,
        dateOrder: req.body.dateOrder,
        clientId: req.body.clientId
    };
    Order.create(order)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error ocurred while creating the order."
            });
        });
}

  /**
   *  --------------------------------------------------------------
   * |                       GET ALL ORDERS                         |
   *  --------------------------------------------------------------
   */

exports.findAll = (req, res) => {
    Order.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while creating the bicycle."
            })
        });
}

