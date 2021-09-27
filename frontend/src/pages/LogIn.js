import { Grid } from "@chakra-ui/react"

import { LogInBox } from "../components/LogInBox"

export const LogIn = () => (
  <Grid
    alignItems='center'
    justifyContent='center'
    w='100%'
    minH='100vh'
  >
    <LogInBox />
  </Grid>
)
