module.exports = app => {
    const client = require("../controllers/ClientController.js");

    var router = require("express").Router();

    router.post("/", client.create);
    router.get("/", client.findAll);
    
    router.put("/:id", client.update);
    router.delete("/:id", client.delete);

    app.use("/api/clients", router);
}