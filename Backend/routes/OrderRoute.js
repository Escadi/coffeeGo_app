module.exports = app => {
    const order = require("../controllers/orderController.js");
    var router = require("express").Router();

    router.get("/", order.findAll);




    app.use("/api/order", router);
}