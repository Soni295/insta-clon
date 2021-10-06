import mariadb from 'mariadb'
import { config as activeVariablesEnvironment } from 'dotenv'
activeVariablesEnvironment()

export const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT
})

export const getConnection = async(query) => {
  try {
    const connection = await pool.getConnection()
    return connection.query(query)
  } catch (error) {
    console.log(error)
  }
}
