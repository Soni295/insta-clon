import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/logIn'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})

