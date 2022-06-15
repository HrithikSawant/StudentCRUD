import { Pool } from 'pg'

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'test',
  user: 'postgres',
  password: 'test123'
})

export default pool
