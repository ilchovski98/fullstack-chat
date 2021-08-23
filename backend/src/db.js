require('dotenv').config()
const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.DATABASE_USER,
  host: 'localhost',
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
})

console.log(process.env);
console.log(process.env.DATABASE_NAME);

module.exports = pool;