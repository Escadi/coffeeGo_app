module.exports = (sequelize, Sequelize) => {
    const detailsOrder = sequelize.define("detailsOrder", {
        stock: {
            type: Sequelize.INTEGER
        },
        subtotal: {
            type: Sequelize.FLOAT
        },
        idProduct: {
            type: Sequelize.INTEGER,
            references: {
                model: "product",
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

    };
    return detailsOrder;

}