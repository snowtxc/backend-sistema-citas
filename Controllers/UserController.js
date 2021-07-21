
const UserModel = require("../Models/User");

const handleFatalError = require("../__helpers/handleFatalError");
const { getById } = require("./ClienteController");




var UserController = {
    
    login: function(request,response){
        console.log("Login");

    },

    register: function(request,response){
        console.log("Register");

    },

    getById: function(request,response){

    }
     

}


module.exports = UserController;