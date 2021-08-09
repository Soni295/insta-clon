import { Box, Grid, GridItem, VStack } from "@chakra-ui/react"
import { Card } from "../components/Cards/Feed"

export const Storys = () =>{
  return(
    <Box
      h='100%'
      w='100%'
      bg='red'
    >
      Hello
    </Box>
  )
}


const Publications = () => {
  return(
    <VStack>
      <Card />
      <Card />
    </VStack>
  )
}

export const Home = () => (
  <Grid
    templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(1, 2fr)", "repeat(5, 1fr)"]}
    bg={['red', 'blue', 'black', 'white']}
    w='100%'
    h='100%'
  >
    <GridItem colSpan={3}>
      <Publications />
    </GridItem>
    <GridItem colSpan={2}>
      <Storys />
    </GridItem>
  </Grid>
)
