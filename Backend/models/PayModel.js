module.exports = (sequelize, Sequelize) => {
    const pay = sequelize.define("pay", {
        typePay: {
            type: Sequelize.STRING
        },
        statusPay:{
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
    });

        /**
  *  ---------------------------------------------------------------------------------
  * |                                 RELACIONSHIPS                                   |
  *  ---------------------------------------------------------------------------------
  */
    pay.associate = (models) => {
        // COMES TO
        pay.belongsTo(models.OrderModel,{
            foreignKey:"idOrder",
            as:"order"
        });
    };
        
    return pay;
}