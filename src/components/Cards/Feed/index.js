import { Box } from "@chakra-ui/react"

import { HeadCard } from "./HeadCard"
import { ImgCard } from "./ImgCard"
import { BodyCard } from "./BodyCard"

const publicacion = {
  user: {
    name: 'example',
    img: 'https://bit.ly/sage-adebayo'
  },
  img: 'https://bit.ly/sage-adebayo',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsa eos dolorum reiciendis. Iure sequi, voluptates velit doloribus reiciendis consequatur debitis dolores nam ab delectus iste error? Minima, necessitatibus nihil.'
}

export const Card = ({data=publicacion}) => {
  return(
    <Box
      bg='gray.100'
      boxShadow='l'
      m='auto'
      borderRadius='8px'
      w={['350px', '450px', '450px', '600px']}
      minW='300px'
      maxW='600px'
      fontSize={['18px', '18px', '20px', '22px']}
    >
      <HeadCard
        img={data.user.img}
        name={data.user.name}
      />
      <ImgCard
        img={data.img}
      />
      <BodyCard
        name={data.user.name}
        desc={data.desc}
      />
    </Box>
  )
}
