module.exports = (sequelize, Sequelize) => {
    const pay = sequelize.define("pay", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        typePay: {
            type: Sequelize.STRING
        },
        statusay:{
            type: Sequelize.STRING
        },
        totalPrice:{
            type: Sequelize.FLOAT
        },
        datePay:{
            type: Sequelize.DATE
        },
        idOrder:{
            type: Sequelize.INTEGER,
            references:{
                model: 'order',
                key: 'id'
            }
        }
    },{
        timestamps:false
    });

        /**
  *  ---------------------------------------------------------------------------------
  * |                                 RELACIONSHIPS                                   |
  *  ---------------------------------------------------------------------------------
  */
    pay.associate = (models) => {

        pay.belongsTo(models.OrderModel,{
            foreignKey:"idOrder",
            as:"order"
        });
    };
        
    return pay;
};