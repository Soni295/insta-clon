import { SqlQuery } from '../../database/SqlQuery.js'
import { USERS } from '../../database/tables.js'

const query = new SqlQuery(USERS)
  .select('*')
  .where()
  .isEqual(USERS.email, 'arturo@hotmail.com')


export const logIn = async(req, res) => {
  const {user, password} = req.body
  console.log(req.body)

  const [row] = await query.connection()

  console.log(row)

  if(user !== 'admin' || password !== '123456'){
    return res.status(500).end()
  }

  return res.status(200).json({title: 'hola', text: 'hola'})
}
