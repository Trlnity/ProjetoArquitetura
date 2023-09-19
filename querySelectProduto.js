const db = require('./banco'); // import do db

const selectQuery = 'SELECT * FROM produto';

db.query(selectQuery, (err, results) => {
  if (err) {
    console.error('Error executing SELECT query:', err);
    return;
  }

  // Process the results
  console.log('Query results:', results);

  // You can loop through the results if needed
  for (const row of results) {
    console.log(`ID: ${row.id}, Nome do produto: ${row.nome}`);
  }
});