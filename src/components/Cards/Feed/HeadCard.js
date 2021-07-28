import { Box, Text, Image } from "@chakra-ui/react"

export const HeadCard = ({name, img}) => (
  <Box
    display='flex'
    my='7px'
    ml='9px'
    alignItems='center'
  >
    <Image
      src={img}
      alt="Segun Adebayo"
      borderRadius='full'
      h='2em'
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
