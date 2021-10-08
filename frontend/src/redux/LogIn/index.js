import { createSlice } from '@reduxjs/toolkit'
import { submitLogIn } from './reducers'
import { getLocalStorage } from '../../utils/getLocalStorage'

const initialState = {
  user: getLocalStorage('user'),
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
    [submitLogIn.fulfilled](state, { payload }){
      state.user = payload.user
      localStorage.setItem('user', JSON.stringify(payload.user))
      state.status = 'succeeded';
    },
    [submitLogIn.rejected](state, action){
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
})

export default userReducer.reducer
