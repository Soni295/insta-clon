import { Box } from "@chakra-ui/react"

import { HeadCard } from "./HeadCard"
import { ImgCard } from "./ImgCard"
import { BodyCard } from "./BodyCard"

export const Card = ({user, img, desc}) => (
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
      img={user.img}
      name={user.name}
    />
    <ImgCard
      img={img}
    />
    <BodyCard
      name={user.name}
      desc={desc}
    />
  </Box>
)
