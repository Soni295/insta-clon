import { useState } from 'react';

export const useSetImg = (id, control) => {
  const [fileName, setFileName] = useState();

  const handleImg = e => {
    const file = e.target.files[0]
    setFileName(file)
    control.setFieldValue(id, file)
  }

  return [fileName, handleImg]
}
