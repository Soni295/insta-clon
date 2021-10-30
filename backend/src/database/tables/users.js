export const USERS = {
  name: 'users',
  id: 'user_id',
  userName: 'user_name',
  password: 'Password',
  email: 'email'
}

export const usersSql = {
  create: `
    INSERT INTO ${USERS.name}
      (${USERS.userName}, ${USERS.password}, ${USERS.email})
    VALUES
      (?, ?, ?)
  `,
  getByName : `
    SELECT *
    FROM ${USERS.name}
    WHERE ${USERS.email} = ?
    OR ${USERS.userName} = ?
  `
}
