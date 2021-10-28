import { USERS, POSTS } from '../../database/tables.js'
import { getConnection } from '../../database/database.js'
import { MockPost } from './mockGetPostForMainPage.js'
export const createPost = async(req, res) => {

  const sql = `
    INSERT INTO ${POSTS.name}
    (${USERS.id}, ${POSTS.file}, ${POSTS.desc})
    VALUES (?, ?, ?)`

  const { id: userID } = res.locals.token
  const fileName = req.file.filename
  const description = req.body.description

  const values = [userID, fileName, description]

  const data = await getConnection(sql, values)

  if(!data) {
    return res.status(500).json({msg: 'Error when created post'})
  }

  return res.status(200).json({msg: 'Post created Successfully'})
}


export const getPostForMainPage = (req, res) => {
  res.status(200).json({res: MockPost})
}
