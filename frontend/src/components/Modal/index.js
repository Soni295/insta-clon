import {
  Button,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"


export const Modal = ({isOpen, onClose, children, handleClick}) => {
  return(
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            type='submit'
            onClick={handleClick}
          >
            Send
          </Button>
        </ModalFooter>

      </ModalContent>
    </ChakraModal>
  )
}

