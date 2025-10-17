module.exports = app => {
    
    require("./ClientRoute")(app);
    require("./CategoryRoute")(app);
    require("./ProductRoute")(app);
   
}