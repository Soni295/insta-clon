import { useFormik } from 'formik'
import { Box } from '@chakra-ui/react';
import { validationSchema } from './Schema'
import { InputForm } from '../InputForm'

const initialValues = {
  user: '',
  password: ''
}

export const LogInForm = () => {
  const onSubmit = values => {
    console.log(values)
  }

  const formik = useFormik({initialValues, validationSchema, onSubmit})

  return(
    <Box
      my='50px'
      mx='30px'
    >
      <form>
        <InputForm
          name='user'
          placeholder='User name'
          formik={formik}
        />
        <InputForm
          name='password'
          placeholder='*********'
          type='password'
          formik={formik}
        />
      </form>
    </Box>
  )
}
