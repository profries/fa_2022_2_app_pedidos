const pedidoRepository = require('./repository/pedido_repository');

const pedido = {
    cliente: {
       id: 1,
       cpf: "111",
       nome: "nome1"
    },
    itens_pedido: [
       { 
          produto: {
             id: 1,
             nome: "pastel",
             preco: 7
          } ,
          quantidade: 1   
       }, 
       { 
          produto: {
             id: 10,
             nome: "cafe",
             preco: 4
          } ,
          quantidade: 1   
       }
    ]   
 }
 
pedidoRepository.inserir(pedido)
    .then(()=> console.log("OK"))
    .catch(err => console.log(err));
