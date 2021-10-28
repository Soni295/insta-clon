import { main } from './Path'

export const configToken = token => ({
  headers: {
    Authorization: token
  }
})

export const createPostRequest = (token, post) => {
  const config = configToken(token)
  return main.post(process.env.REACT_APP_API_POSTS, post, config)
}

export const getPostRequest = () => {
  return null
}

export const getAllPostsRequest = token => {
  const config = configToken(token)
  return main.get(process.env.REACT_APP_API_POSTS, config)
}

export const editPostRequest = () => {
  return null
}
