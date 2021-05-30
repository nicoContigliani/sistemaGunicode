const Pool = require("pg").Pool;

const pool = new Pool({
  user: "root",
  password: "Jesus6388",
  host: "localhost",
  port: 5432,
  database: "sistemas"
});





module.exports = pool;
