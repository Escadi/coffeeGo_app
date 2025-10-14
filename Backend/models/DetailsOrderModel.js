const { detailsOrders } = require(".");

module.exports = (sequelize, Sequelize) => {
    const detailsOrder = sequelize.define("detailsOrder", {
        stock: {
            type: Sequelize.INTEGER
        },
        discount: {
            type: Sequelize.INTEGER
        },
        idProduct: {
            type: Sequelize.INTEGER,
            references: {
                model: "product",
                key: "id"
            }
        },
        idOrder: {
            type: Sequelize.INTEGER,
            references: {
                model: "order",
                key: "id"
            }
        },
        idClient: {
            type: Sequelize.INTEGER,
            references: {
                model: "client",
                key: "id"
            }
        }
    });

    /**
     *  ---------------------------------------------------------------------------------
     * |                                 RELACIONSHIPS                                   |
     *  ---------------------------------------------------------------------------------
     */
    detailsOrder.associate = (models) => {

        // COMES TO
        detailsOrder.belongsTo(models.ProductModel, {
            foreignKey: "idProduct",
            as: "product"
        });

        detailsOrder.belongsTo(models.ClientModel, {
            foreignKey: "idClient",
            as: "client"
        });

        detailsOrder.belongsTo(models.OrderModel, {
            foreignKey: "idOrder",
            as: "order"
        });

    };
    return detailsOrder;

}