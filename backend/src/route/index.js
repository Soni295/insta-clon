import { Router } from 'express'
import { logIn } from './userCtrl/logIn.js'
import { createPost } from './postCtrl/index.js'

export const route = Router()
  .post('/LogIn', logIn)
  .post('/posts/create', createPost)

