import mariadb from 'mariadb'

export const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_DOCKER_PORT
})

export const getConnection = async(query, values=[] ) => {
  try {
    const connection = await pool.getConnection()
    return await connection.query(query, values)
  } catch (error) {
    console.log(error)
  }
}
