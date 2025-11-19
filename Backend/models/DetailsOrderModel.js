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
        detailsOrder.belongsTo(models.product, {
            foreignKey: "idProduct",
            targetKey: "id",
            as: "product"
        });

        detailsOrder.belongsTo(models.client, {
            foreignKey: "idClient",
            targetKey: "id",
            as: "client"
        });

    };
    return detailsOrder;

}