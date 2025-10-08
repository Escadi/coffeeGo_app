const configDB = require('../config/configDB');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    configDB.DB,
    configDB.USER,
    configDB.PASSWORD,
    {
        host: configDB.HOST,
        dialect: configDB.dialect,
        operatorsAliases: false,
        pool: {
            max: configDB.pool.max,
            min: configDB.pool.min,
            acquire: configDB.pool.acquire,
            idle: configDB.pool.idle
        }
    });
    
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


/*
 ------------------------------------------------------------------------------------
|                               RELACIONS SHIPS                                      |
 ------------------------------------------------------------------------------------
*/

db.users = require('./ClientModel.js')(sequelize, Sequelize);
db.products = require('./ProductModel.js')(sequelize, Sequelize);
db.shoppingCarts = require('./Shopping_CartModel.js')(sequelize, Sequelize);
db.orders = require('./OrderModel.js')(sequelize, Sequelize);
db.detailsOrders = require('./DetailsOrderModel.js')(sequelize, Sequelize);
db.categories = require('./CategoryModel.js')(sequelize, Sequelize);
db.baristas = require('./BaristaModel.js')(sequelize, Sequelize);
db.pay = require('./PayModel.js')(sequelize, Sequelize);
db.detailsShoppingCarts = require('./DetailsShoppingCartModel.js')(sequelize, Sequelize);



module.exports = db;