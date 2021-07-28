import { Box } from "@chakra-ui/react"

import { HeadCard } from "./HeadCard"
import { ImgCard } from "./ImgCard"
import { BodyCard } from "./BodyCard"

const publicacion = {
  user: {
    name: 'example',
    img: 'https://bit.ly/sage-adebayo'
  },
  img: 'https://bit.ly/sage-adebayo'
}

export const Card = ({data=publicacion}) => {
  return(
    <Box
      bg='gray.100'
      boxShadow='l'
      m='auto'
      borderRadius='xl'
      minW='400px'
      maxW='600px'
      fontSize={['10px', '12px', '16px', '22px']}
    >
      <HeadCard
        img={data.user.img}
        name={data.user.name}
      />
      <ImgCard />
      <BodyCard />
    </Box>
  )
}
