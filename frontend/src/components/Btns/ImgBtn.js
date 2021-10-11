import { Button, Input, Box } from '@chakra-ui/react';

import { useSetImg } from '../../hooks/useSetImg';
import './style.css'

export const ImgBtn = ({id, control}) => {
  const [fileName, handleImg] = useSetImg(id, control)

  return(
    <Box
      display='grid'
    >
      <Button colorScheme={fileName ? 'red' : 'blue'}>
        { fileName ? 'Picture selected' : 'Select your picture' }
        <Input
          py='30px'
          name={id}
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleImg}
        />
      </Button>
    </Box>
  )
}
