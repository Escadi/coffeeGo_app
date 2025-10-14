const { detailsOrders } = require("./indexModels");

module.exports = (sequelize, Sequelize) => {
    const detailsOrder = sequelize.define("detailsOrder", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        stock: {
            type: Sequelize.INTEGER
        },
        discount: {
            type: Sequelize.INTEGER
        },
        idProduct: {
            type: Sequelize.INTEGER,
            reference: {
                model: "product",
                key: "id"
            }
        },
        idOrder: {
            type: Sequelize.INTEGER,
            reference: {
                model: "order",
                key: "id"
            }
        },
        idClient: {
            type: Sequelize.INTEGER,
            reference: {
                model: "client",
                key: "id"
            }
        },
        idShoppingCart: {
            type: Sequelize.INTEGER,
            reference: {
                model: "shoppingCart",
                key: "id"
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
    detailsOrder.associate = (models) => {

        detailsOrder.belongsTo(models.ProductModel, {
            foreignKey: "idProduct",
            as: "product"
        });

        detailsOrder.belongsTo(models.shoppingCartModel, {
            foreignKey: "idShoppingCart",
            as: "shoppingCart"
        });
        detailsOrder.belongsTo(models.ClientModel, {
            foreignKey: "idClient",
            as: "client"
        });

        detailsOrder.belongsTo(models.OrderModels, {
            foreignKey: "idOrder",
            as: "order"
        });

    };
    return detailsOrder;

};