import { createSlice } from '@reduxjs/toolkit'
import { submitLogIn } from './reducers'

const initialState = {
  posts: [],
  status: 'idle',
  error: null
}

export const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [submitLogIn.pending](state){
      state.status = 'loading';
    },
    [submitLogIn.fulfilled](state){
      state.status = 'succeeded';
    },
    [submitLogIn.rejected](state, action){
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
})

export default userReducer.reducer
