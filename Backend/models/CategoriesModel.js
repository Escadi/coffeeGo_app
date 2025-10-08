module.exports = (sequelize, Sequelize) => {
    const categories = sequelize.define("categories", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
        },
        nameCategory: {
            type: Sequelize.STRING
        }
    });
    return categories
}