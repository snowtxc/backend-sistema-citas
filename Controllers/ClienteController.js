const ClienteModel = require("../Models/Cliente");
const handleFatalError = require("../__helpers/handleFatalError");




 
var ClienteController = {

    create: async function (request, response) {
        const body = request.body;

        const name = body.name;
        const surname = body.surname;
        const phone = body.phone; 
        const USER_ID = request.userID;

        ClienteModel.create({ name: name, surname: surname, phone: phone , UserId: USER_ID}).then(() => {
            response.status(201).send({ msg: 'Cliente creado correctamente!' });

        }).catch((err) => {
            handleFatalError(err);
            response.status(500).send("Ha ocurrido un error!");
        });
    },

    getAllByUser: async function (request, response) {
        const USER_ID = request.userID;

        ClienteModel.findAll({where: {UserId: USER_ID}}).then((clients) => {
            response.status(200).send(clients);

        }).catch((err) => {
            handleFatalError(err);
            response.status(500).send("Ha ocurrido un error")

        })
    },

    getById: function(request,response){
        const ID_CLIENT = request.params.id;
        ClienteModel.findOne({ where: { id: ID_CLIENT} }).then((client) => {
            response.status(200).send(client);
        }).catch((err) => {
            handleFatalError(err);
            response.status(500).send("Ha ocurrido un error")
        })

    },

    deleteById: function(request,response){
        const ID_CLIENT = request.params.id;
        ClienteModel.destroy({ where: { id: ID_CLIENT} }).then((result) => {
            if (result === 0) {
                response.status(400).send("Cliente que intentas eliminar no existe!");
            } else if (result == 1) {
                response.status(200).send({ msg: "Cliente eliminado correctamente" });
            }

        }).catch((error) => {
            handleFatalError(error);
            response.status(500).send("Ha ocurrido un error!")
        })

    },


    editById: function(request,response){
        const ID_CLIENT = request.params.id;
        
        const body = request.body;

        const name = body.name;
        const surname = body.surname;
        const phone = body.phone;


        ClienteModel.update({ name: name , surname: surname, phone: phone}, { where: { id: ID_CLIENT } }).then((result) => {
            if (result[0] == 0) {
                response.status(400).send("Cliente que intentas editar no existe");

            } else if (result[0] == 1) {
                response.status(200).send({ msg: 'Cliente actualizado correctamente!' });
            }
        }).catch((err) => {
            handleFatalError(err);
            response.status(500).send("Ha ocurrido un error!");
        })

    }


}

module.exports = ClienteController;