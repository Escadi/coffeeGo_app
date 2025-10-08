module.exports = (sequelize, Sequelize) => {
    const detailsSoppingCart = sequelize.define("detailsShoppingCart", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        stock:{
            type: Sequelize.INTEGER
        },
        discount:{
            type: Sequelize.INTEGER
        },
        idProduct:{
            type: Sequelize.INTEGER
        },
        idOrder:{
            type: Sequelize.INTEGER
        }
    });
    return detailsSoppingCart;



}