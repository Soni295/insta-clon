import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/LogIn'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})

