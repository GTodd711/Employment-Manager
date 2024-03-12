const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'gt72952',
    database: 'your_database',
});

// Promisify the pool
const promisePool = pool.promise();

module.exports = promisePool;