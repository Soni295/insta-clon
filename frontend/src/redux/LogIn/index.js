import { createSlice } from '@reduxjs/toolkit'
import { submitLogIn } from './reducers'
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage'

const initialState = {
  name: getLocalStorage('name'),
  token: null,
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
      state.name = payload.user
      state.token = payload.token
      setLocalStorage('name', payload.user)
      state.status = 'succeeded';
    },
    [submitLogIn.rejected](state, action){
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
})

export default userReducer.reducer
