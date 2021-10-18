import * as yup from 'yup';
import { createPost } from '../../../redux/Posts/reducers'

export const validationSchema = yup.object({
  img: yup.string().required()
})

export const handleSubmit = dispatch => token => values => {
  const post = new FormData()

  Object.keys(values).forEach(key => {
    post.append(key, values[key])
  })

  dispatch(createPost({token, post}))
}

export const initialValues = {
  img: null,
  description: ''
}
