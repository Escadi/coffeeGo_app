module.exports = (sequelize,Sequelize) => {
    const product = sequelize.define("products", {
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
                model: 'categories',
                key: 'id'
            }
        }
    });
    return product;

}