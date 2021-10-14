import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { Image } from "@chakra-ui/react"
import { useFormik } from 'formik';
import * as yup from 'yup';

import { InputForm } from '../InputForm';
import { Modal } from './index';
import { ImgBtn } from '../Btns/ImgBtn';

export const validationSchema = yup.object({
  img: yup.string().required()
})

export const onSubmit = values => {
  console.log(values)
}

export const initialValues = {
  user: null,
  img: null,
  description: ''
}

export const ModalCreatePost = ({isOpen, onClose}) => {
  const { user } = useSelector(state => state)

  const formik = useFormik({
    initialValues, validationSchema, onSubmit
  });

  useEffect(()=> {
    formik.setFieldValue('user', user.name)
  }, [])

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
