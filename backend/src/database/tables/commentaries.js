import { USERS } from "./users"
import { POSTS } from "./publications"

export const POSTS_COMMENT = {
  name: 'posts_comment',
  id: 'comment_id',
  postId: POSTS.id,
  userId: USERS.id,
  commentary: 'commentary',
  creationTime: 'creation_time'
}

export const createCommentarySql = `
  INSERT INTO ${POSTS_COMMENT.name}
    (${POSTS_COMMENT.postId}, ${POSTS_COMMENT.userId}, ${POSTS_COMMENT.commentary})
  VALUES (?, ?, ?)
`
