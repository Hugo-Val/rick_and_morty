const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
// defino el modelo
    sequelize.define('User', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail : true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        
    });
    }
