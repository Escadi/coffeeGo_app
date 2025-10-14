module.exports = (sequelize, Sequelize) => {
    const shoppingCart = sequelize.define("shoppingCart", {
        idClient:{
            type: Sequelize.INTEGER,
            references:{
                model: 'client',
                key: 'id'
            }
        },
        totalPrice:{
            type: Sequelize.FLOAT
        }
    });

    
    /**
     *  ---------------------------------------------------------------------------------
     * |                                 RELACIONSHIPS                                   |
     *  ---------------------------------------------------------------------------------
     */
       
        shoppingCart.associate = (models) => {
             //COMES TO
            shoppingCart.belongsTo(models.ClientModel,{
                foreignKey: "idClient",
                as:"client"
            });
            //IS GOING TO
            shoppingCart.hasMany(models.DetailsShoppingCartModel,{
                foreignKey:"idShoppingCart",
                as:"detailsShoppingCart"
            });
        }

    return shoppingCart;
}