import { Router } from 'express'
import { logIn } from './userCtrl/logIn.js'
import { createPost } from './postCtrl/index.js'
import { checkAuthentication } from './checkAuthentication/index.js'

import { uploadImg } from '../middlewares/multer.js'

export const route = Router()
  .post('/LogIn', logIn)
  .post('/Post', [checkAuthentication, uploadImg.single('img'), createPost])
