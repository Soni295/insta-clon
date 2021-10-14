import { main } from './Path'

export const createPostRequest = (user, post) => (
  main.get(process.env.REACT_APP_API_CREATEPOSTS, {user, post})
)
