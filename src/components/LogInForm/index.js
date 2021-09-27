import { useFormik } from 'formik'
import { Box, Button } from '@chakra-ui/react';

import { validationSchema, initialValues } from './Schema'

import { InputForm } from '../InputForm'
import { fetchLogIn } from '../../services/login'

export const LogInForm = () => {

  const onSubmit = async(values) => {
    const mmm = await fetchLogIn(values)
  }

  const formik = useFormik({initialValues, validationSchema, onSubmit})

  return(
    <Box
      my='50px'
      mx='30px'
    >
      <form onSubmit={formik.handleSubmit}>
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
        <Button
          type='submit'
          colorScheme='blue'
          mt='30px'
          w='100%'
        >
          Log In
        </Button>
      </form>
    </Box>
  )
}
