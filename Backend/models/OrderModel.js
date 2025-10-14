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
            references: {
                model: 'client',
                key: 'id'
            }
        },
        idBarista: {
            type: Sequelize.INTEGER,
            references: {
                model: 'barista',
                key: 'id'
            }
        }
    }, {
        timestamps: false
    });



    /**
  *  ---------------------------------------------------------------------------------
  * |                                 RELACIONSHIPS                                   |
  *  ---------------------------------------------------------------------------------
  */

    order.associate = (models) => {

        order.belongsTo(models.ClientModel, {
            foreignKey: "idClient",
            as: "client"
        });

        order.belongsTo(models.BaristaModel, {
            foreignKey: "idBarista",
            as: "barista"
        });


    };
    return order;
};