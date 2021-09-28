import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchLogIn } from '../../services/login'

export const submitLogIn = createAsyncThunk('LogIn/post',
  async ({user, password}) => {
    const res = await fetchLogIn({user, password})
    return res.data
})
