const db = require("../models");
const Product = db.product;

exports.create = (req,res) => {
    if(!req.body.nameProduct){
        res.status(400).send({
            message: "Contend can not be empty"
        });
        return;
    }

    const product = {
        nameProduct: req.body.nameProduct,
        detailsProduct: req.body.detailsProduct,
        priceProduct: req.body.priceProduct,
        idCategory: req.body.idCategory
    };
    Product.create(product)
    .then((data) => {
        res.send(data);
        
    }).catch((err) => {
        err.status(500).send({
            message: err.message || "Some error occurred while creating the Product."
        });
        
    });
}

exports.findAll = (req,res) => {
    Product.findAll()
    .then((data) => {
        res.send(data);
        
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving products."
        });
    });
}