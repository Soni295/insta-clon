import { USERS } from '../../database/tables.js'
import { getConnection } from '../../database/database.js'
import jwt from 'jsonwebtoken'

export const checkPassword = (pass, passDB) => {
  return pass === passDB
}

export const logIn = async(req, res) => {
  const { user, password } = req.body

  const sql = `
    SELECT *
    FROM ${USERS.name}
    WHERE ${USERS.email} = ?
    OR ${USERS.userName} = ?
  `
  const [data] = await getConnection(sql, [user, user])
  const passDB = data[`${USERS.password}`]

  if(!(data && checkPassword(password, passDB))) {
    return res.status(401).json({msg: 'Login failed'})
  }

  const userForToken = {
    id: data[`${USERS.id}`],
    user: data[`${USERS.userName}`],
  }

  const token = jwt.sign(userForToken, process.env.SECRECT)

  return res.status(200).json({msg: 'LogIn successfully', user, token})
}
