module.exports = (sequelize, Sequelize) => {
    const barista = sequelize.define("barista",{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nameBarista:{
            type: Sequelize.STRING
        },
        usernamesBarista:{
            type: Sequelize.STRING
        },
            
    });
    return barista;
}