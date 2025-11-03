const db = require("../models");
const Product = db.product;

exports.create = (req, res) => {
  if (!req.body.nameProduct) {
    res.status(400).send({
      message: "Contend can not be empty"
    });
    return;
  }

  const product = {
    nameProduct: req.body.nameProduct,
    detailsProduct: req.body.detailsProduct,
    priceProduct: req.body.priceProduct,
    filename: req.file ? req.file.filename : "",
    idCategory: req.body.idCategory
  };

  Product.create(product)
    .then((data) => {
      res.send(data);

    }).catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Product."
      });

    });
}

exports.findAll = (req, res) => {
  Product.findAll()
    .then((data) => {
      res.send(data);

    }).catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving products."
      });
    });
}

exports.findOne = (req, res) => {
  Product.findOne({ where: { id: req.params.id } })
    .then(product => {
      if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      res.json(product);
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Product.update(
    {
      nameProduct: req.body.nameProduct,
      detailsProduct: req.body.detailsProduct,
      priceProduct: req.body.priceProduct,
      idCategory: req.body.idCategory

    },
    { where: { id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Product updated successfully." });
      } else {
        res.send({ message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!` });
      }
    })
    .catch(err => {
      res.status(500).send({ message: "Error updating Product with id=" + id });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Product.destroy({ where: { id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Product deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Product with id=${id}. Maybe Product was not found!` });
      }
    }).catch(err => {
      res.status(500).send({ message: "Could not delete Product with id=" + id });
    } );
}  