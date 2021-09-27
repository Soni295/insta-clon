import { Image } from "@chakra-ui/react"

export const ProfileImagen = ({alt='', img='', size='small'}) => {
  const sizeIcon = {
    small: '2em',
    big: '18em'
  }

  return(
    <Image
      src={img}
      alt={alt}
      h={sizeIcon[size]}
      borderRadius='full'
    />
  )
}
