import { configureStore } from '@reduxjs/toolkit'
import user from '../redux/LogIn'
import posts from '../redux/Posts'

export default configureStore({
  reducer: {
    user,
    posts
  }
})

