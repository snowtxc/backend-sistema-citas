var express = require("express");
var bodyParser = require("body-parser");



const app = new express();

//Archivos de rutas
const user_routes = require("./Routes/user_routes");
const cliente_routes = require("./Routes/cliente_routes");
const cita_routes = require("./Routes/cita_routes");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));





//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Rutas
app.use('/api', user_routes);
app.use('/api', cliente_routes);
app.use('/api', cita_routes);






//Exportacion

module.exports = app;