const ClienteModel = require("../Models/Cliente");
const CitaModel = require("../Models/Cita");
const handleFatalError = require("../__helpers/handleFatalError");

//router.post("/citas", verifyToken, CitaController.create);
//router.get("/citas", verifyToken, CitaController.getAllByUser);
//router.get("/citas/:id/info", verifyToken, CitaController.getById);
//router.delete("/citas/:id/delete", verifyToken, CitaController.deleteById);
//router.put("/citas/:id/edit", verifyToken, CitaController.editById);



var CitaController = {

    create: async function (request, response) {
        const body = request.body;

        const title = body.title;
        const motivo = body.motivo;
        const fecha = body.fecha;
        const clienteID = body.clienteID;

        const USER_ID = request.userID;

        CitaModel.create({ title: title, motivo: motivo, fecha: fecha, ClienteId: clienteID , UserId: USER_ID}).then(() => {
            response.status(201).send({ msg: ' Cita creado correctamente!' });

        }).catch((err) => {
            handleFatalError(err);
            response.status(500).send("Ha ocurrido un error!");
        });
    },

    getAllByUser: async function (request, response) {
        const USER_ID = request.userID;

        CitaModel.findAll({ where: { UserId: USER_ID } }).then((citas) => {
            response.status(200).send(citas);

        }).catch((err) => {
            handleFatalError(err);
            response.status(500).send("Ha ocurrido un error")

        })
    },

    
    getById: async function (request, response) {
        const ID_CITA = request.params.id;

        CitaModel.findOne({ where: { id: ID_CITA } , include: [ClienteModel]}).then((client) => {
            response.status(200).send(client);
        }).catch((err) => {
            handleFatalError(err);
            response.status(500).send("Ha ocurrido un error")
        });

    },

    deleteById: async function (request, response) {
        const ID_CITA = request.params.id; 
        CitaModel.destroy({ where: { id: ID_CITA } }).then((result) => {
            if (result === 0) {
                response.status(400).send("Cita que intentas eliminar no existe!");
            } else if (result == 1) {
                response.status(200).send({ msg: "Cita eliminado correctamente" });
            }

        }).catch((error) => {
            handleFatalError(error);
            response.status(500).send("Ha ocurrido un error!")
        })

    },


    editById: async  function (request, response) {
        const ID_CITA = request.params.id;

        const body = request.body;

        const title = body.title;
        const motivo = body.motivo;
        const fecha = body.fecha;
        const clienteID = body.clienteID; 


    
        CitaModel.update({ title: title, motivo: motivo, fecha: fecha, ClienteId: clienteID }, {where: {id: ID_CITA}}).then((result) => {
            if (result[0] == 0) {
                response.status(400).send("Cita que intentas editar no existe");

            } else if (result[0] == 1) {
                response.status(200).send({ msg: 'Cita actualizado correctamente!' });
            }
        }).catch((err) => {
            handleFatalError(err);
            response.status(500).send("Ha ocurrido un error!");
        })

    }



}

module.exports = CitaController;