import express from 'express'
import cors from 'cors'
import { route } from './route/index.js'
import { handleErrors } from './middlewares/handleErrors.js'

export const app = express()
const port = '3001'

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(route)
app.use(handleErrors)

app.listen(port, () => {
  console.log(`Running on the port ${port}`)
})
