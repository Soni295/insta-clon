import { useFormik } from 'formik'
import { Box, Button } from '@chakra-ui/react';
import { useCustomToast } from '../../hooks/useCustomToast';

import { useDispatch, useSelector } from 'react-redux';
import { validationSchema, initialValues } from './Schema'

import { InputForm } from '../InputForm'
import { submitLogIn } from '../../redux/LogIn/reducers'

export const LogInForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state)

  const label = {
    state: user,
    successMsg: 'Login successfully.',
    errorMsg: 'Your email or password was incorrect.'
  }
  const mmmm = useCustomToast(label)

  const onSubmit = values => {
    dispatch(submitLogIn(values))
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
