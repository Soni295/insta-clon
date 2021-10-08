import { SqlQuery } from '../../database/SqlQuery.js'
import { USERS } from '../../database/tables.js'


export const logIn = async(req, res) => {
  const { user, password } = req.body

  const [row] = await new SqlQuery(USERS)
    .select('*')
    .where()
    .isEqual(USERS.email, user)
    .or()
    .isEqual(USERS.userName, user)
    .connection()


  return row
    ? res.status(200).json({msg: 'Login successfully', user})
    : res.status(404).json({msg: 'Login failed'})
}
