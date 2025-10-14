module.exports = (sequelize, Sequelize) => {
    const category = sequelize.define("category", {
        nameCategory: {
            type: Sequelize.STRING
        }
    });

     /**
    *  ---------------------------------------------------------------------------------
    * |                                 RELACIONSHIPS                                   |
    *  ---------------------------------------------------------------------------------
    */

     category.associate = (models) => {

        //IS GOING TO
        category.hasMany(models.ProductModel,{
            foreignKey:"idCategory",
            as:"category"
        })
     };
    return category
    
}