import { Box, Text } from "@chakra-ui/react"
import { ProfileImagen } from "../../ProfileImagen"

export const HeadCard = ({name, img}) => (
  <Box
    display='flex'
    my='7px'
    ml='9px'
    alignItems='center'
  >
    <ProfileImagen
      size='small'
      img={img}
    />
    <Text
      as='h3'
      fontSize='1em'
      ml='8px'
    >
    {name}
    </Text>
  </Box>
)
