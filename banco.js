const Sequelize = require ('sequelize');
const sequelize = new Sequelize('crud', 'root', 'positivo',{
    dialect: 'mysql',
    host: 'localhost',
})

module.exports = sequelize;





// const mysql = require('mysql');

// const db = mysql.createPool({
//   host: 'localhost',     // MySQL server host
//   user: 'root',  // MySQL username
//   password: 'positivo123',  // MySQL password
//   database: 'db_camadas'  // database name
// });

// // export db
// module.exports = db;

