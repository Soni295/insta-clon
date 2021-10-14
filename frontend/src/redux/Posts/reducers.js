import { createAsyncThunk } from '@reduxjs/toolkit'
import { createPostRequest } from '../../services/createPosts'

/*
export const getPosts = createAsyncThunk('postsReducer/getPost',
  async (user) => {
    const res = await getAllPosts(user)
    return res.data
})

*/

export const createPost = createAsyncThunk('postsReducer/createPost',
  async (user, post) => {
    const res = createPostRequest(user, post)
    return res.data
  }
)
