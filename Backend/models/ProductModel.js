module.exports = (sequelize,Sequelize) => {
    const product = sequelize.define("product", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
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
    },{
        timestamps: false
    });

       /**
     *  ---------------------------------------------------------------------------------
     * |                                 RELACIONSHIPS                                   |
     *  ---------------------------------------------------------------------------------
     */
    product.associate = (models)=>{
        product.belongsTo(models.CategoryModel,{
            foreignKey:"idCategory",
            as:"category"
        });
        
    }
    return product;

}