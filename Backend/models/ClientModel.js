module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("clients", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nameClient: {
            type: Sequelize.STRING
        },
        usernamesClient: {
            type: Sequelize.STRING
        },
        emailClient: {
            type: Sequelize.STRING
        }
    });
    return Client;
}