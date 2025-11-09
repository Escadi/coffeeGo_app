module.exports = app => {
    const client = require("../controllers/ClientController.js");
    console.log("ClientRoute loaded...", client);
    const authorization = require("../controllers/authorization.js");
    console.log("Authorization loaded...", authorization);
    

    var router = require("express").Router();

    router.post("/", client.create);
    router.get("/", authorization.isAuthenticated, client.findAll);
    router.get("/:id", authorization.isAuthenticated, client.findOne);
    router.put("/:id", authorization.isAuthenticated, client.update);
    router.delete("/:id", client.delete);

    app.use("/api/clients", router);
}