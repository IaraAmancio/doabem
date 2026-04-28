const {Pool} = require("pg");
const { ssl } = require("pg/lib/defaults");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    }
});

pool.connect()
    .then(() => console.log("Banco conectado"))
    .catch(err => console.error("Erro ao conectar:", err));

module.exports = pool;
