module.exports = (sequelize, Sequelize) => {
    const detailsOrderModel = sequelize.define("detailsOrder", {
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
    return detailsOrderModel;
    
}