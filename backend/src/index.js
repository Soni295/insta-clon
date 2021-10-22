import app from './app.js'

app.listen(process.env.NODE_DOCKER_PORT, () => {
  console.log(`Running on the port ${process.env.NODE_DOCKER_PORT}`)
})
