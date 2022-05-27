const pedidoNegocio = require('./negocio/pedido_negocio');

const pedido = {
   cliente: {
      id: 1,
      cpf: "111",
      nome: "nome1"
   },
   itensPedido: [
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
            id: 2,
            nome: "cafe",
            preco: 4
         } ,
         quantidade: 1   
      }
   ]      
 }
 
pedidoNegocio.inserir(pedido)
    .then(()=> console.log("OK"))
    .catch(err => console.log(err));
