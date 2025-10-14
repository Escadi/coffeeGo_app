module.exports = (sequelize, Sequelize) => {
    const order = sequelize.define("order", {
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
    });



    /**
  *  ---------------------------------------------------------------------------------
  * |                                 RELACIONSHIPS                                   |
  *  ---------------------------------------------------------------------------------
  */

    order.associate = (models) => {
        //COMES TO
        order.belongsTo(models.ClientModel, {
            foreignKey: "idClient",
            as: "client"
        });

        order.belongsTo(models.BaristaModel, {
            foreignKey: "idBarista",
            as: "barista"
        });

        // IS GOING TO
        order.hasMany(models.PayModel, {
            foreignKey: "idOrder",
            as: "pay"
        });
        order.hasMany(models.DetailsOrderModel, {
            foreignKey: "idOrder",
            as: "detailsOrder"
        });



    };
    return order;
}