import express from 'express'

const port = '3001'
const app = express()

app.listen(port, () => {
  console.log(`Running on the port ${port}`)
})
