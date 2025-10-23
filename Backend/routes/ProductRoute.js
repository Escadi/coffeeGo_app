module.exports = (app) => {
    const product = require("../controllers/ProductController.js");

    var router = require("express").Router();

    router.post("/", product.create);
    router.get("/", product.findAll);
    router.get("/:id", product.findOne);
    router.put("/:id", product.update);




    app.use("/api/product", router);
}