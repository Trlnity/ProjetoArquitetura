-- Create a new schema
CREATE SCHEMA IF NOT EXISTS mov_produto;

-- Use the newly created schema
USE mov_produto;

-- Create the first table
CREATE TABLE IF NOT EXISTS produto (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome VARCHAR(50)
);

-- Create the second table
CREATE TABLE IF NOT EXISTS movimentoproduto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    qtde_mov INT NOT NULL,
    tipo ENUM ("E", "S") NOT NULL COLLATE utf8mb4_general_ci, -- remover collate se precisar
    FOREIGN KEY (produto_id) REFERENCES produto(id),
);