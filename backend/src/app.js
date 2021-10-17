import { config as activeVariablesEnvironment } from 'dotenv'
activeVariablesEnvironment()

import express from 'express'
import cors from 'cors'
import { route } from './route/index.js'
import { handleErrors } from './middlewares/handleErrors.js'

export const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(route)
app.use(handleErrors)

export default app
