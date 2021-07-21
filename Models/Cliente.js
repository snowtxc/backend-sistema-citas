const conexion = require("../database");
const { DataTypes } = require("sequelize");



const ClienteModel = conexion.define("Cliente", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 30
    },

    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 30 
    },


    celular: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 30
    },

})


module.exports = ClienteModel;
