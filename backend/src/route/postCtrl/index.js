import { publicationsSql } from '../../database/tables/publications.js'
import { getConnection } from '../../database/database.js'

export const createPost = async(req, res) => {

  const sql = publicationsSql.create

  const { id: userID } = res.locals.token
  const { filename } = req.file
  const { description } = req.body

  const values = [userID, filename, description]

  const data = await getConnection(sql, values)

  if(!data) {
    return res.status(500).json({msg: 'Error when created post'})
  }

  return res.status(200).json({msg: 'Post created Successfully'})
}


export const getPostForMainPage = async(_, res) => {
  const sql = publicationsSql.getAll
  const data = await getConnection(sql)
  res.status(200).json({data})
}
