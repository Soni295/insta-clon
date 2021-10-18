export const createPost = async(req, res) => {
  const { id: userID } = res.locals.token

  console.log(req.file)
  console.log(req.body)
  console.log(res.locals.token)
  console.log(userID)
  //console.log(req.body)
  /*
  if(!token?.id){
    return res.status(401).json({msg: 'token is missing or invalid'})
  }
  */
  return res.status(200).json({msg: 'Post created Successfully'})
}
