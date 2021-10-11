import { useState } from 'react';
import { getBase64 } from '../utils/getBase64';

export const useSetImg = (id, control) => {
  const [fileName, setFileName] = useState();

  const handleImg = async(e) => {
    const file = e.target.files[0]
    setFileName(file.name)
    const file64 = await getBase64(file)
    control.setFieldValue(id, file64)
  }

  return [fileName, handleImg]
}
