module.exports = (sequelize, Sequelize) => {
    const barista = sequelize.define("barista", {
        nameBarista: {
            type: Sequelize.STRING
        },
        usernamesBarista: {
            type: Sequelize.STRING
        },

    }, {
        timestamps: false
    });

    /**
    *  ---------------------------------------------------------------------------------
    * |                                 RELACIONSHIPS                                   |
    *  ---------------------------------------------------------------------------------
    */

    barista.associate = (models) => {
        // is going to
        barista.hasMany(models.order, {
            foreignKey: "idBarista",
            sourceKey: "id",
            as: "order"
        });
    };
    return barista;
}