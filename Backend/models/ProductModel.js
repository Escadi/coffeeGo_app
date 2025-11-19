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
        filename:{
            type: Sequelize.STRING
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
        product.belongsTo(models.category,{
            foreignKey:"idCategory",
            targetKey:"id",
            as:"category"
        });
        product.hasMany(models.detailsOrder,{
            foreignKey: "idProduct",
            sourceKey: "id",
            as: "detailsOrder"
        });

        
    };
    return product;

}