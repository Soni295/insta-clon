import { USERS } from "./users.js"

export const POSTS = {
  name: 'posts',
  id: 'post_id',
  userId: USERS.id,
  file: 'file_name',
  desc: 'description',
  creationTime: 'creation_time'
}

export const publicationsSql = {
  getAll2: `
    SELECT * from ${POSTS.name} WHERE 1=1
  `,
  create: `
    INSERT INTO ${POSTS.name}(${POSTS.userId}, ${POSTS.file}, ${POSTS.desc})
    VALUES(?, ?, ?)
  `,
  getAll: `
    SELECT
      ${POSTS.id}, ${USERS.userName}, ${POSTS.file},
      ${POSTS.desc}, ${POSTS.creationTime}
    FROM
      ${POSTS.name}
    INNER JOIN
      ${USERS.name}
    ON
      ${USERS.name}.${USERS.id} = ${POSTS.name}.${POSTS.userId}
  `
}
