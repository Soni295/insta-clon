import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchLogIn } from '../services/login'

export const submitLogIn = createAsyncThunk('LogIn/post',
  async ({user, password}) => {
    const res = await fetchLogIn({user, password})
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
