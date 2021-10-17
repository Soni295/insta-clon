import { useSelector, useDispatch } from 'react-redux';
import { Image } from "@chakra-ui/react"
import { useFormik } from 'formik';

import { InputForm } from '../../InputForm';
import { Modal } from '../index';
import { ImgBtn } from '../../Btns/ImgBtn';
import { validationSchema, handleSubmit, initialValues } from './setFormik'

export const ModalCreatePost = ({isOpen, onClose}) => {

  const dispatch = useDispatch()
  const { token } = useSelector(state => state.user)

  const onSubmit = handleSubmit(dispatch)(token)

  const formik = useFormik({
    initialValues, validationSchema, onSubmit
  });

  console.log(formik.values)

  return(
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      handleClick={formik.handleSubmit}
    >
      <Image
        h='400px'
        w='100%'
        objectFit='cover'
        src={formik.values.img}
        mb='30px'
      />
      <ImgBtn
        id='img'
        control={formik}
      />
      <InputForm
        name='description'
        formik={formik}
      />
    </Modal>
  )
}
