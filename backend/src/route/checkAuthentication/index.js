import jwt from 'jsonwebtoken'

export const checkAuthentication = (req, res, next) => {
  const authorization = req.get('authorization')

  let token = ''

  if(authorization && authorization.toLowerCase().startsWith('bearer')){
    token = authorization.substr(7)
  }

  decoredToken = jwt.verify(token, process.env.SECRECT)


  res.locals.token = decoreToken

  next()
}
