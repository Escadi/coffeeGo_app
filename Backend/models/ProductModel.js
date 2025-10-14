module.exports = (sequelize,Sequelize) => {
    const product = sequelize.define("product", {
        nameProduct:{
            type: Sequelize.STRING
        },
        detailsProduct:{
            type: Sequelize.STRING
        },
        priceProduct:{
            type: Sequelize.FLOAT
        },
        idCategory:{
            type: Sequelize.INTEGER,
            references:{
                model: 'category',
                key: 'id'
            }
        }
    });

       /**
     *  ---------------------------------------------------------------------------------
     * |                                 RELACIONSHIPS                                   |
     *  ---------------------------------------------------------------------------------
     */
    
    product.associate = (models)=>{
        // COMES FROM
        product.belongsTo(models.CategoryModel,{
            foreigKey:"idCategory",
            as:"category"
        });
        // IS GOING TO
        product.hasMany(models.DetailsShoppingCartModel,{
            foreigKey: "idProduct",
            as: "detailsShoppingCart"
        });
        product.hasMany(models.DetailsOrderModel,{
            foreigKey: "idProduct",
            as: "detailsOrder"
        });

        
    };
    return product;

}