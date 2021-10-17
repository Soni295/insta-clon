import * as yup from 'yup';
import { createPost } from '../../../redux/Posts/reducers'

export const validationSchema = yup.object({
  img: yup.string().required()
})

export const handleSubmit = dispatch => token => post => {
  dispatch(createPost({token, post}))
}

export const initialValues = {
  img: null,
  description: ''
}
