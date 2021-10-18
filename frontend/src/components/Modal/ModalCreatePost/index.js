import { useSelector, useDispatch } from 'react-redux';
import { Image } from "@chakra-ui/react"
import { useFormik } from 'formik';

import { validationSchema, handleSubmit, initialValues } from './setFormik'
import { Modal } from '../index';
import { InputForm } from '../../InputForm';
import { ImgBtn } from '../../Btns/ImgBtn';
import { useConvertFileToImg } from "../../../hooks/useConvertFileToImg";

export const ModalCreatePost = ({isOpen, onClose}) => {
  const dispatch = useDispatch()
  const { token } = useSelector(state => state.user)

  const onSubmit = handleSubmit(dispatch)(token)

  const formik = useFormik({
    initialValues, validationSchema, onSubmit
  });

  const img = useConvertFileToImg(formik.values.img)

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
        src={img}
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
