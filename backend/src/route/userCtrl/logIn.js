import { usersSql, USERS } from '../../database/tables/users.js'
import { getConnection } from '../../database/database.js'
import jwt from 'jsonwebtoken'

export const checkPassword = (pass, passDB) => {
  return pass === passDB
}

export const logIn = async(req, res) => {
  const { user, password } = req.body

  const sql = usersSql.getByName
  const [data] = await getConnection(sql, [user, user])
  const passDB = data[`${USERS.password}`]

  if(!(data && checkPassword(password, passDB))) {
    return res.status(401).json({msg: 'Login failed'})
  }

  const userForToken = {
    id: data[`${USERS.id}`],
    user: data[`${USERS.userName}`],
  }

  const token = jwt.sign(userForToken, process.env.PRIVATE_TOKEN_KEY)

  return res.status(200).json({msg: 'LogIn successfully', user, token})
}
