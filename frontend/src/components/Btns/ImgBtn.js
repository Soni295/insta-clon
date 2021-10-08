import { Button, Input } from '@chakra-ui/react';
import { useState } from 'react';




function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default getBase64;

export const ImgBtn = () => {
  const [fileName, setFileName] = useState();
  const file = true

  return(
    <Button colorScheme={file ? 'red' : 'blue'}>
      <input
        type="file"
        accept="image/png, image/jpeg"

      />


    </Button>
  )
}
