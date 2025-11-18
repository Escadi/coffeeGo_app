module.exports = app => {
    
    require("./ClientRoute")(app);
    require("./CategoryRoute")(app);
    require("./ProductRoute")(app);
    require("./OrderRoute")(app);
    require("./DetailsOrderRoute")(app);
   
}