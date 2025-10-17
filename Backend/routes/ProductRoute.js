module.exports = (app) => {
    const product = require("../controllers/ProductController.js");
    var router = require("express").Router();

    router.post("/", product.create);
    router.get("/", product.findAll);




    app.use("/api/product", router);
}