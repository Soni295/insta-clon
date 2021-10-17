import app from './app.js'

app.listen(process.env.PORT, () => {
  console.log(`Running on the port ${process.env.PORT}`)
})
