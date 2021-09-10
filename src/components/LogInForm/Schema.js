import * as Yup from 'yup';

export const validationSchema = Yup.object({
  user: Yup
    .string()
    .required('user is required'),
  password: Yup
    .string()
    .required('password is required')
    .min(6, 'El password debe contener al menos 6 caracteres'),
})
