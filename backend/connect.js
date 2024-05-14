const dotenv = require("dotenv");

dotenv.config();
var PGDATABASE = process.env.PGDATABASE;
var PGHOST = process.env.PGHOST;
var PGPASSWORD = process.env.PGPASSWORD;
var PGPORT = process.env.PGPORT;
var PGUSER = process.env.PGUSER;

const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "Manu123",
    host: "localhost",
    port: 5432,
    database: "postgres"
})
pool.connect((err)=>{
    if(err){
        console.log("Connection error",err.stack);
    }
    else{
        console.log("Connected");
    }
})

module.exports = pool;