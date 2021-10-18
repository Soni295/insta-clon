import { useMemo } from 'react'

export const useConvertFileToImg = file => (
  useMemo(() => {
    if(!file) return ''
    return URL.createObjectURL(file)
  }, [file])
)
