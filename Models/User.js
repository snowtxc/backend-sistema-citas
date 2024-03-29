const conexion = require("../database");
const { DataTypes } = require("sequelize");

const bcrypt = require('bcrypt');
const saltRounds = 10;


const UserModel = conexion.define("User", {
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


    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        },
        
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            const encrypted = bcrypt.hashSync(value, saltRounds);
            this.setDataValue('password', encrypted);
        }

    },

})

UserModel.prototype.validateUser = async function (email, password, callback) {
    console.log(email)
    UserModel.findOne({ where: { email: email } }).then((user) => {
        if (!user) {
            callback(null, false);
            return;
        }

        const succesValidate = bcrypt.compareSync(password, user.password);
        if (succesValidate) {
            callback(null, user);
        } else {
            callback(null, false);
        }
    }).catch((error) => {
        callback(error, null);
    })
}


module.exports = UserModel;
