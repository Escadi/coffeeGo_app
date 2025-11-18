module.exports = app => {
    const detailsOrder = require("../controllers/DetailsOrderController.js");
    var router = require("express").Router();



    router.post("/", detailsOrder.create);
    router.get("/", detailsOrder.findAll);
    //router.post("/:id", detailsOrder.update)

    app.use("/api/detailsOrder", router);
}