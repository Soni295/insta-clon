import express from 'express'
import cors from 'cors'
import { route } from './route/index.js'
import { handleErrors } from './middlewares/handleErrors.js'

export const app = express()

const urlencodedConfig = {
  extended: true,
  limit: '30mb',
  parameterLimit: 30000
}

app.use(express.urlencoded(urlencodedConfig))
app.use(express.json({limit:'30mb'}))
app.use(cors())
app.use(route)
app.use(handleErrors)

export default app
