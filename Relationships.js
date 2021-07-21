const conexion = require("./database");


//Models

const UserModel = require("./Models/User");
const ClienteModel = require("./Models/Cliente");
const CitaModel = require("./Models/Cita");



//Relationships
UserModel.hasMany(ClienteModel, { foreignKey: 'UserId'});
ClienteModel.belongsTo(UserModel);

UserModel.hasMany(CitaModel, { foreignKey: 'UserId' });
CitaModel.belongsTo(UserModel);


ClienteModel.hasMany(CitaModel, { foreignKey: 'ClienteId' });
CitaModel.belongsTo(ClienteModel);





conexion.sync()