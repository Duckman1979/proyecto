const mysql = require('mysql');
const { dbconfig } = require('./config');

//crear conexion a la base  de datos
const connection = mysql.createConnection(dbconfig);

connection.connect((err) => {
    if(err){
        console.error('Error al conectar la base de datos!!!');
        return;
    }
    console.log('conexion a la base de datos exitosa!!!');
});

module.exports = connection;