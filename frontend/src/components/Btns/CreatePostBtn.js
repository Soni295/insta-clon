import { useDisclosure } from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'

import { ModalCreatePost } from '../Modal/ModalCreatePost/index'

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
