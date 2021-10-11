import { Image } from "@chakra-ui/react"
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Modal } from './index';
import { ImgBtn } from '../Btns/ImgBtn';


export const validationSchema = yup.object({
  img: yup.string().required()
})

export const onSubmit = values => {
  console.log('hola')
}

export const initialValues = {
  user: null,
  img: null,
  description: ''
}

export const ModalCreatePost = ({isOpen, onClose}) => {
  const handleSubmit = () => console.log('hola')

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return(
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      handleClick={handleSubmit}
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
    </Modal>
  )
}
