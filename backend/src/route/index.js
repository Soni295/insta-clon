import { Router } from 'express'
import { logIn } from './userCtrl/logIn.js'
import { USERS } from '../database/tables.js'

import { SqlQuery } from '../database/SqlQuery.js'

export const route = Router()
  .post('/LogIn', logIn)
  .get('/example', async(req, res)=> {
    res.status(200).json({hola: 'hola'})

  })
