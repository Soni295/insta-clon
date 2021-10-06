import { Router } from 'express'
import { logIn } from './userCtrl/logIn.js'
import { USERS } from '../database/tables.js'

import { SqlQuery } from '../database/SqlQuery.js'

export const route = Router()
  .post('/LogIn', logIn)
  .get('/example', async(req, res)=> {
    try{
      const [queryUser] = await new SqlQuery(USERS)
        .select('*')
        .where()
        .isEqual(USERS.email, 'arturo@hotmail.com')
        .connection()

      if(queryUser) {
        return res.status(200).json(queryUser)
      }
      return res.status(500).json({msg: 'don\'t exist'})
    }
    catch(error){ console.log(error) }
  })
