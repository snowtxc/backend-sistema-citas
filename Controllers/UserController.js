
const UserModel = require("../Models/User");

const handleFatalError = require("../__helpers/handleFatalError");
const { getById } = require("./ClienteController");
const jwt = require("jsonwebtoken");




var UserController = {
    
    login: async function(request,response){
        const body = request.body;

        const email = body.email;
        const password = body.password;

        UserModel.prototype.validateUser(email, password, (err, user) => {
            if (err) {
                handleFatalError(err);
                response.status(500).send("Ha ocurrido un error");
            } else if (!user) {
                response.status(403).send("Authenticacion erronea");

            } else if (user) {
                const token = jwt.sign(user.dataValues.id, "user_key");
                response.status(200).send({ user: user, token: token });
            }
        })
    
    },

    register: async function(request,response){
        const body = request.body;

        console.log(body);

        const email = body.email;
        const password = body.password;
        const name = body.name;
        const surname = body.surname;

        UserModel.create({ name: name,  surname: surname, email: email, password: password}).then((user) =>{
            if(!user){
                response.status(500).send({
                    msg: 'Ha ocurrido un error'
                })
            }
            const token =  jwt.sign(user.dataValues.id,"user_key");
            response.status(201).send({
                msg: "Usuario registrado correctamente",
                user: user,
                token: token
            })
        })
    },

    getById: function(request,response){

    }
     

}


module.exports = UserController;