import { configureStore } from '@reduxjs/toolkit'
import user from '../redux/LogIn'

export default configureStore({
  reducer: {
    user
  }
})

