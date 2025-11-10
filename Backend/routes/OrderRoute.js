module.exports = app => {
    const order = require("../controllers/orderController.js");
    var router = require("express").Router();




    router.post("/", order.create);
    router.get("/", order.findAll);




    app.use("/api/order", router);
}