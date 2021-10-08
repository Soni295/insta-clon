import { useDisclosure } from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'

import * as yup from 'yup';
import { Modal } from '../Modal';
import { ImgBtn } from './ImgBtn';

import { useFormik } from 'formik';


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
      <ImgBtn />
    </Modal>
  )
}

export const CreatePostBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <AddIcon
        border='1px solid red'
        borderRadius='10px'
        p='8px'
        h={8}
        w={8}
        onClick={onOpen}
        _hover={{
          cursor: 'pointer',
          color: '.500',
          transition: '500ms '
        }}
      />
      <ModalCreatePost
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}
