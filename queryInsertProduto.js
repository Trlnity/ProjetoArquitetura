const db = require('./banco'); // import do db

const dadosInsert = {
    nome: 'nome do produto' // valor deve ser retirado por function
};

const insertQuery = 'INSERT INTO produto (nome) VALUES (?)';

// Execute the query
db.query(insertQuery, [dadosInsert.nome], (err, results) => {
    if (err) {
        console.error('Error inserting data:', err);
        return;
    }
    console.log('Data inserted successfully.');
});