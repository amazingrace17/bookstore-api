const Pool = require('pg').Pool;
const dotenv = require('dotenv')

dotenv.config();

const pool = new Pool({
    user: 'process.env.DBuser',
    host: 'process.env.localhost',
    database: 'process.env.trial',
   password: 'process.env.Tifemi@odus17',
   port : 5432,
})

pool.on('connect',()=>{
    console.log('database connected succesfully')
})

pool.on('error',()=>{
 console.log(`ERROR: ${error}`)
})
module.exports = pool;  