const {Router} = require('express');
const { obtenerProductos, registrarPedido } = require('../controllers/pedidos');
const router = Router();

router.get("/obtenerProductos", obtenerProductos)
router.post("/registrarPedido", registrarPedido)


module.exports = router;
