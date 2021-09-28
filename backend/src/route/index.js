import { Router } from 'express'
import { logIn } from './userCtrl/logIn.js'

export const route = Router()
  .post('/LogIn', logIn)
