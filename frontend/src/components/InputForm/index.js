import { Alert, AlertIcon, FormControl, Input } from '@chakra-ui/react'

export const InputForm = ({ type = 'text', placeholder = '', name, formik }) => (
  <FormControl mt={2}>
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    {formik.touched[name] && formik.errors[name] ? (
      <Alert justifyContent="center" status="error">
        <AlertIcon />
        {formik.errors[name]}
      </Alert>
    ) : null}
  </FormControl>
)
