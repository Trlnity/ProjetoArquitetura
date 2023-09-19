const db = require('./banco'); // import do db

const dadosInsert = {
    qtde_mov: 3, // todos esses dados devem ser retirados por input
    tipo: "entrada", 
    id_produto: 2 // id precisa ser a mesma do produto na tabela produto
};

const insertQuery = 'INSERT INTO movimentoproduto (qtde_mov, tipo, id_produto) VALUES (?, ?, ?)';

// Execute the query
db.query(insertQuery, [dadosInsert.qtde_mov, dadosInsert.tipo, dadosInsert.id_produto], (err, results) => {
    if (err) {
        console.error('Error inserting data:', err);
        return;
    }
    console.log('Data inserted successfully.');
});