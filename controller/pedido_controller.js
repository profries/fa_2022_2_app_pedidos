const pedidoNegocio = require('../negocio/pedido_negocio');

exports.inserir = async (req, res) => {
    const pedido = req.body;
    
    try{ 
        const pedidoInserido = await pedidoNegocio.inserir(pedido);
        res.status(201).json(pedidoInserido);
    }
    catch(err) {
        if(err.status) {
            res.status(err.status).json(err);
        }
        else {
            res.status(500).json({message: "Erro nao identificado"});            
        }
    }   
}