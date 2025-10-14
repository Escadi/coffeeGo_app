module.exports = (sequelize, Sequelize) => {
    const detailsShoppingCart = sequelize.define("detailsShoppingCart", {
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
            references: {
                model: 'product',
                key: 'id'
            }
        },
        idShoppingCart: {
            type: Sequelize.INTEGER,
            references: {
                model: 'shoppingCart',
                key: 'id'
            }
        },
        idClient: {
            type: Sequelize.INTEGER,
            references: {
                model: "client",
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

    detailsShoppingCart.associate = (models) => {

        detailsShoppingCart.belongsTo(models.Shopping_CartModel, {
            foreignKey: "idShoppingCart",
            as: "shoppingCart"
        });
        detailsShoppingCart.belongsTo(models.ProductModel, {
            foreignKey: "idProduct",
            as: "product"
        });
        detailsShoppingCart.belongsTo(models.ClientModels, {
            foreignKey: "idClient",
            as: "client"
        });
    };



    return detailsShoppingCart;



};