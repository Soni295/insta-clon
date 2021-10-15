import jwt from 'jsonwebtoken'

const verifyToken = token => {
  let decored = null
  try {
    decored = jwt.verify(token, process.env.SECRECT)
  }
  catch(e) { }
  return decored
}

export const checkAuthentication = (req, res, next) => {
  const authorization = req.get('authorization')

  let token = ''

  if(authorization && authorization.toLowerCase().startsWith('bearer')){
    token = authorization.substr(7)
  }

  const decoreToken = verifyToken(token)

  if(!token || !decoreToken){
    return res.status(401).json({msg: 'token is missing or invalid'})
  }
  res.locals.token = decoreToken

  next()
}
