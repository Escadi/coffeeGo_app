module.exports = (sequelize, Sequelize) => {
    const Pay = sequelize.define("pays", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        typePay: {
            type: Sequelize.STRING
        },
        statusay:{
            type: Sequelize.STRING
        },
        totalPrice:{
            type: Sequelize.FLOAT
        },
        datePay:{
            type: Sequelize.DATE
        },
        idOrder:{
            type: Sequelize.INTEGER
        }
    });
    return Pay;
}