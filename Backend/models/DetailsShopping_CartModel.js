module.exports = (sequelize, Sequelize) => {
    const detailsShoppingCart = sequelize.define("detailsShoppingCart", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        stock:{
            type: Sequelize.INTEGER
        },
        discount:{
            type: Sequelize.INTEGER
        },
        idProduct:{
            type: Sequelize.INTEGER,
            references:{
                model: 'product',
                key: 'id'
            }
        },
        idOrder:{
            type: Sequelize.INTEGER,
            references:{
                model: 'order',
                key: 'id'
            }
        }
    });
    return detailsShoppingCart;



}