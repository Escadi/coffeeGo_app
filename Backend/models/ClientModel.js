module.exports = (sequelize, Sequelize) => {
    const client = sequelize.define("client", {
        nameClient: {
            type: Sequelize.STRING
        },
        usernameClient: {
            type: Sequelize.STRING
        },
        emailClient: {
            type: Sequelize.STRING
        }
    });

     /**
    *  ---------------------------------------------------------------------------------
    * |                                 RELACIONSHIPS                                   |
    *  ---------------------------------------------------------------------------------
    */

    client.associate = (models) => {
        //is going to
        client.hasMany(models.ShoppingCartModel,{
            foreignKey:"idClient",
            as:"shoppingCart"
        });
          client.hasMany(models.DetailsShoppingCartModel,{
            foreignKey:"idClient",
            as:"detailsShoppingCart"
        });
          client.hasMany(models.OrderModel,{
            foreignKey:"idClient",
            as:"order"
        });

    };
    return client;
}