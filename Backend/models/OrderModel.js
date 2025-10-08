
module.exports = (sequelize, Sequelize) => {
    const order = sequelize.define("orders", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: Sequelize.DATE
        },
        totalPrice: {
            type: Sequelize.FLOAT
        },
        status: {
            type: Sequelize.STRING
        },
        idClient: {
            type: Sequelize.INTEGER
        },
        idBarista: {
            type: Sequelize.INTEGER
        }
    });
    return order
}