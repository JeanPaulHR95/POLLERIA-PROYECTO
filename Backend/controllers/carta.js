const {response} = require('express');
const { dbConnection } = require('../database/config')

const actualizarProducto = async (req, res = response) =>{
    const {tipo} = req.body;
    dbConnection();
    if(tipo === "bebida"){
        const {idbebida, nombre, volumen, precio} = req.body;
        const requestBebida = new sql.Request();
        const queryBebida = "UPDATE BEBIDAS SET NOMBRE=@nombre, VOLUMEN=@volumen, PRECIO=@precio WHERE ID_BEBIDAS=@idbebida";
        requestBebida.input('nombre', sql.VarChar, nombre)
        requestBebida.input('volumen', sql.Numeric, volumen)
        requestBebida.input('precio', sql.Numeric, precio)
        requestBebida.input('idbebida', sql.Int, idbebida)
        
        await requestBebida.query(queryBebida);

        res.json({
            res: 'ok'
        })

    }
    else{
        const {idplato, nombre, ingredientes, tipo, precio} = req.body;
        const requestPlato = new sql.Request();
        const queryPlato = "UPDATE PLATOS SET NOMBRE=@nombre, INGREDIENTES=@ingredientes, TIPO=@tipo, PRECIO=@precio WHERE ID_PLATO=@idplato";
        requestPlato.input('nombre', sql.VarChar, nombre)
        requestPlato.input('ingredientes', sql.Varchar, ingredientes)
        requestPlato.input('tipo', sql.Varchar, tipo)
        requestPlato.input('precio', sql.Numeric, precio)
        requestPlato.input('idplato', sql.Int, idplato)
        
        await requestPlato.query(queryPlato);

        res.json({
            res: 'ok'
        })
    }
}