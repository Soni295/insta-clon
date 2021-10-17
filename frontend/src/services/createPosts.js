import { main } from './Path'

export const createPostRequest = (token, post) => {
  const config = { headers: {
    Authorization: token
  }}

  return main.post(process.env.REACT_APP_API_CREATEPOSTS, post, config)
}
