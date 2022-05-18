const { Pool } = require('pg')
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'cantina'
})

exports.inserir = async (pedido) => {
    const cliente = await pool.connect();

    try{
        await cliente.query('BEGIN');
        //INSERTS
        const sql = "INSERT INTO pedidos (id_cliente) VALUES ($1) RETURNING *";
        const values = [pedido.cliente.id];
        const res = await cliente.query(sql, values);
        console.log('Pedido');
        console.log(res.rows[0]);


        pedido.itens_pedido.forEach(async(itemPedido) => {
            const sqlItem = "INSERT INTO item_pedidos(id_pedido,id_produto, quantidade)VALUES ($1, $2, $3) RETURNING *";
            const valuesItem = [res.rows[0].id, itemPedido.produto.id, itemPedido.quantidade];
            const resItem = await cliente.query(sqlItem, valuesItem);
            console.log('ItemPedido');
            console.log(resItem.rows[0]);
            
        });

        await cliente.query('COMMIT');
        console.log('COMMIT');
    }
    catch(err) {
        await cliente.query('ROLLBACK');
        console.log('ROLLBACK');
        console.log(err);
    }
    finally {
        cliente.release()
    }
}


