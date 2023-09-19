const db = require('./banco'); // import do db

const joinQuery = `
  SELECT movimentoproduto.id_produto AS idProduto, produto.nome AS nomeProduto, movimentoproduto.qtde_mov AS qtdeMov
  FROM movimentoproduto
  INNER JOIN produto ON movimentoproduto.id_produto = produto.id
  WHERE movimentoproduto.id_produto = ?`;

// Define any parameters for your query
const conditionValue = '2'; // pegar esse valor com prompt do comando, usuário informa id do produto, retorna o nome e qtde do movimento

// Execute the query
db.query(joinQuery, [conditionValue], (err, results) => {
  if (err) {
    console.error('Error executing JOIN query:', err);
    return;
  }

  // Process the results
  console.log('Query results:', results);

  // You can loop through the results if needed
  for (const row of results) {
    console.log(`ID: ${row.idProduto}`);
    console.log(`Nome do produto: ${row.nomeProduto}`);
    console.log(`Quantidade: ${row.qtdeMov}`);
  }
});