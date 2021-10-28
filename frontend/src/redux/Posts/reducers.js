import { createAsyncThunk } from '@reduxjs/toolkit'
import { createPostRequest, getAllPostsRequest } from '../../services/Post'

export const getPostsForMainReducer = createAsyncThunk('postsReducer/getPost',
  async (token) => {
    const res = await getAllPostsRequest(token)
    return res.data
})

export const getPostsForMain = dispatch => ({
  getPostsForMain: token => dispatch(getPostsForMainReducer(token))
})

export const createPost = createAsyncThunk('postsReducer/createPost',
  async ({token, post}) => {
    const res = createPostRequest(token, post)
    return res.data
  }
)
