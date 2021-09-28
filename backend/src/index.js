import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import { route } from './route/index.js'

const app = express()
const port = '3001'

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(cors())
app.use(route)

app.listen(port, () => {
  console.log(`Running on the port ${port}`)
})
