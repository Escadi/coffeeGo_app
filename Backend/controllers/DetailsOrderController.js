const db = require("../models");
const DetailsOrder = db.detailsOrder;


// ---------------------------------------------
// Crear detalle de pedido (sin control de stock)
// ---------------------------------------------
exports.create = (req, res) => {
    if(!req.body.idProduct){
        res.status(400).send({
            message: "Content can not be empty"
        });
        return;
    }
    const detailsOrder = {
        stock: req.body.stock,
        subtotal: req.body.subtotal,
        idProduct: req.body.idProduct,
        idClient: req.body.idClient,

    }
    DetailsOrder.create(detailsOrder)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Details Order."
        });
    });

};

// ----------------------------------------------------
// Obtener lista de detalles de un pedido
// ----------------------------------------------------
 exports.findAll = (req, res) => {
  DetailsOrder.findAll()
    .then((data) => {
      res.send(data);

    }).catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving products."
      });
    });
}
