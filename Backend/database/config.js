const express = require('express');
const app = express();
const sql = require('mssql');

// Configuración de la conexión a la base de datos
const dbConfig = {
  user: 'Jesus',
  password: 'Flores',
  server: 'DESKTOP-KI1SHHE',
  database: 'PolleriaPrueba',
};

const dbConnection = async () => {
    await sql.connect(dbConfig);
}

module.exports = {
    dbConnection
}