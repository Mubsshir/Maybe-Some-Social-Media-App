const sql = require("mssql");
const SQLServerStore = require("connect-mssql-v2");

// Configuration for the SQL Server connection
const config = {
  user: "sa",
  password: "112233",
  server: "Mubasshir-PC\\NODE_SERVER", // Your SQL Server instance, could be an IP address
  database: "KhanPostDB",
  options: {
    encrypt: true, // For secure connection
    trustServerCertificate: true, // Change to 'false' on production
  },
};

const store = new SQLServerStore(config, {
  ttl: 1000 * 60 * 60 * 24,
  autoRemoveInterval: 1000 * 60 * 10,
  useUTC:false
});

store.on('connect',()=>{
  console.log("Connected to store")
})

store.on('error',(err)=>{
  console.log("Error while accessing store: "+err)
})

const pool = new sql.ConnectionPool(config);

const initialize = async () => {
  try {
    console.log("Trying to connect with database..........");
    await pool.connect();
    console.log("\n---Connected to database----\n");
  } catch (err) {
    console.log(`\n----Error while Connecting to Database : ${err}---\n`);
  }
};

module.exports = { pool, initialize, sql, store };
