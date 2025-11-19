module.exports = (sequelize, Sequelize) => {
    const client = sequelize.define("client", {
        nameClient: {
            type: Sequelize.STRING
        },
        usernameClient: {
            type: Sequelize.STRING
        },
        emailClient: {
            type: Sequelize.STRING
        },
        passwordClient: {
            type: Sequelize.STRING
        },
        rolUserClient: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "USER"
        }
    });

    /**
   *  ---------------------------------------------------------------------------------
   * |                                 RELACIONSHIPS                                   |
   *  ---------------------------------------------------------------------------------
   */

    client.associate = (models) => {
        client.hasMany(models.order, {
            foreignKey: "idClient",
            as: "order"
        });
        client.hasMany(models.detailsOrder, {
            foreignKey: "idClient",
            sourceKey: "id",
            as: "detailsOrder"
        });
    };
    return client;
}