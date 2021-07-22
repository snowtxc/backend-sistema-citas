const conexion = require("../database");
const { DataTypes } = require("sequelize");



const ClienteModel = conexion.define("Cliente", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 30
    },

    surname: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 30 
    },


    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 30
    },

})


module.exports = ClienteModel;
