const {response} = require('express');
const { dbConnection } = require('../database/config')

const obtenerProductos = async() =>{
    dbConnection();
    const resPlatos = new sql.Request();
    const queryPlatos = "SELECT * FROM PLATOS";
    const resBebidas = new sql.Request();
    const queryBebidas = "SELECT * FROM BEBIDAS";
    const resultPlatos = await resPlatos.query(queryPlatos);
    const resultBebidas = await resBebidas.query(queryBebidas);
    let data = [];

}

const registrarPedido = async (req, res = response) =>{
    const {dni, nombre, apellidoP, apellidoM, direccion, referencia, platos, bebidas} = req.body;
    dbConnection();

    const requestCliente = new sql.Request();
    const queryCliente = "INSERT INTO CLIENTE VALUES (@dni, @nombre, @apellidoP, @apellidoM)";
    const requestPedido = new sql.Request();
    const queryPedido = "INSERT INTO PEDIDO(DNI, direccion, referencia) VALUES (@dni, @direccion, @referencia)";
    
    requestCliente.input('dni', sql.Char, dni);
    requestCliente.input('nombre', sql.VarChar, nombre);
    requestCliente.input('apellidoP', sql.VarChar, apellidoP);
    requestCliente.input('apellidoM', sql.VarChar, apellidoM);
    requestPedido.input('dni', sql.Char, dni);
    requestPedido.input('direccion', sql.VarChar, direccion);
    requestPedido.input('referencia', sql.VarChar, referencia);

    await requestCliente.query(queryCliente);
    await requestPedido.query(queryPedido);
    
    const request = new sql.Request();
    const selectQuery = "SELECT TOP 1 * FROM PEDIDO ORDER BY ID_PEDIDO DESC";
    const result = await request.query(selectQuery);
    const idPedido = result.recorset[0];

    for(let plato of platos){
        const requestPlato = new sql.Request();
        const queryPlato = "INSERT INTO DETALLE_PEDIDO(ID_PEDIDO, ID_PLATO) VALUES (@idpedido, @idplato)";
        requestPlato.input('idpedido', sql.Int, idPedido)
        requestPlato.input('idplato', sql.Int, plato.id)
        await requestPlato.query(queryPlato);
    }

    for(let bebida of bebidas){
        const requestBebida = new sql.Request();
        const queryBebida = "INSERT INTO DETALLE_PEDIDO(ID_PEDIDO, ID_BEBIDAS) VALUES (@idpedido, @idbebidas)";
        requestBebida.input('idpedido', sql.Int, idPedido)
        requestBebida.input('idbebidas', sql.Int, bebida.id)
        await requestBebida.query(queryBebida);
    }

    res.json({
        res: 'ok'
    })
    
}


module.exports = {
    obtenerProductos,
    registrarPedido
}