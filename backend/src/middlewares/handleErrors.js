const ERROR_HANDLERS = {
  JsonWebTokenError: res =>
    res.status(401)
      .json({msg: 'token is missing or invalid'}),
  defaultError: res =>
    res.status(500).end()
}

export const handleErrors = (err, req, res, next) => {
  console.error(err.name)
  const handle = ERROR_HANDLERS[err.name] || ERROR_HANDLERS.defaultError
  handle(res, err)
}
