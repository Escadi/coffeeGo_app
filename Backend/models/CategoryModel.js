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
        category.hasMany(models.product,{
            foreignKey:"idCategory",
            sourceKey:"id",
            as:"category"
        })
     };
    return category
    
}