import { Grid } from "@chakra-ui/react"
import { Publications } from "../components/Publications"

export const Home = () => (
  <Grid
    bg={[
      'red', 'blue',
      'black', 'white'
    ]}
    w='100%'
    h='100%'
  >
    <Publications />
  </Grid>
)
