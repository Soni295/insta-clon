import { createSlice } from '@reduxjs/toolkit'
import { submitLogIn } from './reducers'
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage'

const defaultSession = {
  name: null,
  token: null
}

const session = getLocalStorage('session') || defaultSession

const initialState = {
  name: session.name,
  token: session.token,
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
      let { user: name } = payload
      let token = 'Bearer ' + payload.token
      state.name = name
      state.token = token
      setLocalStorage('session', {name, token})
      state.status = 'succeeded';

    },
    [submitLogIn.rejected](state, action){
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
})

export default userReducer.reducer
