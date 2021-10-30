import { createSlice } from '@reduxjs/toolkit'
import { createPost, getPostsForMainReducer } from './reducers'
import { setPostsArray } from '../../utils/convertsData'

const initialState = {
  data: [],
  status: 'idle',
  error: null,
}

export const postsReducer = createSlice({
  name: 'postsReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [getPostsForMainReducer.pending](state){
      state.status = 'loading';
    },
    [getPostsForMainReducer.fulfilled](state, { payload }){
      const data = setPostsArray(payload.data)
      state.data = data
      state.status = 'succeeded';
    },
    [getPostsForMainReducer.rejected](state, action){
      state.status = 'failed';
      state.error = action.error.message;
    },


    [createPost.pending](state){
      state.status = 'loading';
    },
    [createPost.fulfilled](state, { payload }){
      //state.user = payload.user

      state.status = 'succeeded';
    },
    [createPost.rejected](state, action){
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
})

export default postsReducer.reducer
