const conexion = require("../database");
const { DataTypes } = require("sequelize");



const ClienteModel = conexion.define("Cita", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 30
    },

    motivo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },

})


module.exports = ClienteModel;
