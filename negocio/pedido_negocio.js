const pedidoRepository = require('../repository/pedido_repository');
const pedidoValidador = require('./validador/pedido_validador')

exports.inserir = async (pedido) => {
    try{
        pedidoValidador.validaPedido(pedido);
        const pedidoInserido = await pedidoRepository.inserir(pedido);
        return pedidoInserido;
    }
    catch(err) {
        throw err;  
    }            
}
