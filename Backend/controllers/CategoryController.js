const db = require("../models");
const Category = db.category;


exports.create = (req, res) => {
    if (!req.body.nameCategory) {
        res.status(400).send({
            message: "Contend can not be empty"
        });
        return;
    }

    const category = {
        nameCategory: req.body.nameCategory
    };
    
    Category.create(category)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while creating the Category."
            });
        });


};

exports.findAll = (req, res) => {
    Category.findAll()
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