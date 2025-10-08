module.exports = (sequelize, Sequelize) => {
    const shoppingCart = sequelize.define("shoppingCart", {
        id: {  
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idClient:{
            type: Sequelize.INTEGER
        },
        totalPrice:{
            type: Sequelize.FLOAT
        }
    });

    return shoppingCart;
}