import { useEffect } from 'react'
import { useToast } from '@chakra-ui/react';

export const useCustomToast = ({state, successMsg='', errorMsg=''}) => {
  const toast = useToast()

  useEffect(()=> {
    const duration = 3000
    const isClosable = true
    const success = {
      title: successMsg,
      status: 'success'
    }

    const error = {
      title: errorMsg,
      status: 'error'
    }

    if(['succeeded', 'failed'].some(st => st === state.status)){
      toast({
        duration,
        isClosable,
        ...(state.status === 'succeeded'
          ? {...success}
          : {...error}),
      })
    }
  }, [state.status])
}
