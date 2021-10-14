import { createSlice } from '@reduxjs/toolkit'
//import { submitLogIn } from './reducers'
import { createPost } from './reducers'

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
