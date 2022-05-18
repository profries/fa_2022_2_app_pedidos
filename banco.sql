CREATE TABLE produtos (
	id serial PRIMARY KEY,
	nome VARCHAR(30) NOT NULL,
	preco REAL NOT NULL,
)

CREATE TABLE clientes (
	id serial PRIMARY KEY,
	cpf VARCHAR(12) NOT NULL,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(30) NOT NULL,
	telefone VARCHAR(20) 
)

CREATE TABLE pedidos (
	id serial PRIMARY KEY,
	data_hora TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP ,
	id_cliente INT NOT NULL,
	FOREIGN KEY (id_cliente)
		REFERENCES clientes (id)
)

CREATE TABLE item_pedidos (
	id SERIAL PRIMARY KEY,
	id_pedido INT NOT NULL,
	id_produto INT NOT NULL,
	quantidade INT NOT NULL,
	FOREIGN KEY (id_pedido)
		REFERENCES pedidos (id),
	FOREIGN KEY (id_produto)
		REFERENCES produtos (id)
)

INSERT INTO produtos (nome, preco)
VALUES ('pastel', 7)

INSERT INTO produtos (nome, preco)
VALUES ('cafe', 4)

INSERT INTO pedidos (id_cliente) 
VALUES (1)

INSERT INTO item_pedidos(id_pedido, id_produto, quantidade)
VALUES (1, 1, 1)

INSERT INTO item_pedidos(id_pedido, id_produto, quantidade)
VALUES (1, 2, 1)

