module.exports = (sequelize, Sequelize) => {
    const order = sequelize.define("order", {
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
            type: Sequelize.INTEGER,
            references:{
                model: 'client',
                key: 'id'
            }
        },
        idBarista: {
            type: Sequelize.INTEGER,
            references:{
                model: 'barista',
                key: 'id'
            }
        }
    });
    return order
}