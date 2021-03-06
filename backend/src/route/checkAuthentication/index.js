import jwt from 'jsonwebtoken'

export const checkAuthentication = (req, res, next) => {
  const authorization = req.get('authorization')

  let token = ''

  if(authorization && authorization.toLowerCase().startsWith('bearer')){
    token = authorization.substr(7)
  }

  const decoreToken = jwt.verify(token, process.env.PRIVATE_TOKEN_KEY)

  res.locals.token = decoreToken

  next()
}
