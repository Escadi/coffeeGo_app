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
db.product = require('./ProductModel.js')(sequelize, Sequelize);
db.shoppingCart = require('./Shopping_CartModel.js')(sequelize, Sequelize);
db.order = require('./OrderModel.js')(sequelize, Sequelize);
db.detailsOrder = require('./DetailsOrderModel.js')(sequelize, Sequelize);
db.category = require('./CategoryModel.js')(sequelize, Sequelize);
db.barista = require('./BaristaModel.js')(sequelize, Sequelize);
db.pay = require('./PayModel.js')(sequelize, Sequelize);
db.detailsShoppingCart = require('./DetailsShoppingCartModel.js')(sequelize, Sequelize);



module.exports = db;