//Verificar se pedido tem:
//Pedido não está vazio ou indefinido
//Cliente -> pedido.cliente.id 
//ItensPedido e esse não está vazio
//Cada itemPedido possui produto -> produto.id
//Cada itemPedido possui quantidade e esta é maior que 0 

let erro = {message:"", status:400};

exports.validaPedido = (pedido) => {
    if(!pedido) {
        erro.message = "Pedido vazio ou indefinido";
        throw erro;
    }

    if(!pedido.cliente || !pedido.cliente.id) {
        erro.message = "Pedido não tem cliente!";
        throw erro;
    }

    if(!pedido.itensPedido || pedido.itensPedido.length <= 0){
        erro.message = "Pedido não tem itens!";
        throw erro;
    }

    pedido.itensPedido.forEach(itemPedido => {
        if(!itemPedido.produto || !itemPedido.produto.id) {
            erro.message = "Algum item está sem produto!";
            throw erro;
        }        
        if(!itemPedido.quantidade || itemPedido.quantidade <= 0) {
            erro.message = "Algum item está sem quantidade!";
            throw erro;
        }               
    });
} 