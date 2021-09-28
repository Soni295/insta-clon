import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/LogIn'

export default configureStore({
  reducer: {
    userReducer
  }
})

