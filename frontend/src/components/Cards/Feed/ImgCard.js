import { Box, Image } from "@chakra-ui/react"

export const ImgCard = ({img}) => (
  <Box>
    <Image
      m='auto'
      src={img}
      alt="Segun Adebayo"
    />
  </Box>
)
