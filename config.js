const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

//configurar la sesion
app.use(session({
    secret: 'mysecretKey',
    resave: false,
    saveUninitialized: true
}));

//resover las rutas estaticas
app.use(express.static("public"));

//rutas motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/views'));

//configuracion base de datos
const dbconfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'discos',
}

module.exports = { app, PORT, dbconfig, session};

