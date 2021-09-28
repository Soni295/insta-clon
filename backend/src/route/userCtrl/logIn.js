export const logIn = (req, res) => {
  const {user, password} = req.body

  if(user !== 'admin' || password !== '123456'){
    return res.status(404).end()
  }

  return res.status(200).json({title: 'hola', text: 'hola'})
}
