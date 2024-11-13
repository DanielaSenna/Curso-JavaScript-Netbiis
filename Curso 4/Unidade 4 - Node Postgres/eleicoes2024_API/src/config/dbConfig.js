import pg from 'pg';
const {Pool} = pg;

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'root',
    database: 'myDatabase',
    port: 5432
})

export default pool;