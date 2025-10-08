module.exports = (sequelize, Sequelize) => {
    const client = sequelize.define("client", {
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
    return client;
}