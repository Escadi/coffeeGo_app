module.exports = (sequelize, Sequelize) => {
    const category = sequelize.define("category", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
        },
        nameCategory: {
            type: Sequelize.STRING
        }
    });
    return category
}