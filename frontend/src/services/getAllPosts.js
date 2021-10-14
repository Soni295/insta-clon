import { main } from './Path'

export const getAllPosts = user => (
  main.get(process.env.REACT_APP_API_GETPOSTS, user)
)
