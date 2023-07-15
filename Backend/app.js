const express = require('express');
const routePedidos = require('./routes/pedidos')
const app = express();


app.use(routePedidos);