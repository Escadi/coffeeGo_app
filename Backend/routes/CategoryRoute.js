module.exports = app => {
   const category = require("../controllers/CategoryController.js");
   
    var router = require("express").Router();

    router.post("/", category.create);
    
    router.get("/", category.findAll);



    app.use("/api/category", router);
}