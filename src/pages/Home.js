import { Box, SimpleGrid } from "@chakra-ui/react"
import { Card } from "../components/Cards/Feed"

export const Storys = () =>{
  return(
    <Box>
      Hello
    </Box>
  )
}

export const Home = () => (
  <SimpleGrid columns='2'>
    <Card />
    <Storys />
  </SimpleGrid>
)
