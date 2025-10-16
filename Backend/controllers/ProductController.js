const db = require("../models");
const Product = db.product;
const Op = db.Sequelize.Op;

exports.create = (req,res) => {
    if(!req.body.nameProduct){
        res.status(400).send({
            message: "Contend can not be empty"
        });
        return;
    }

    const product = {
        nameProduct: req.body.nameProduct,
        descriptionProduct: req.body.descriptionProduct,
        priceProduct: req.body.priceProduct,
        idCategory: req.body.idCategory
    };
}