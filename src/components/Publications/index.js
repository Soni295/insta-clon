import { VStack } from "@chakra-ui/react"
import { Card } from "../Cards/Feed"
import { useGenerateKey } from "../../hooks/useGenerateKey"

const data1 = [
  {
    user: {
      name: 'example',
      img: 'https://bit.ly/sage-adebayo'
    },
    img: 'https://bit.ly/sage-adebayo',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsa eos dolorum reiciendis. Iure sequi, voluptates velit doloribus reiciendis consequatur debitis dolores nam ab delectus iste error? Minima, necessitatibus nihil.'
  },
  {
    user: {
      name: 'example',
      img: 'https://bit.ly/sage-adebayo'
    },
    img: 'https://bit.ly/sage-adebayo',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsa eos dolorum reiciendis. Iure sequi, voluptates velit doloribus reiciendis consequatur debitis dolores nam ab delectus iste error? Minima, necessitatibus nihil.'
  },
  {
    user: {
      name: 'example',
      img: 'https://bit.ly/sage-adebayo'
    },
    img: 'https://bit.ly/sage-adebayo',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsa eos dolorum reiciendis. Iure sequi, voluptates velit doloribus reiciendis consequatur debitis dolores nam ab delectus iste error? Minima, necessitatibus nihil.'
  },
]

export const Publications = () => {
  const data = useGenerateKey(data1)

  return(
    <VStack>
      {data.map(pub =>
        <Card {...pub} />
      )}
    </VStack>
  )
}
