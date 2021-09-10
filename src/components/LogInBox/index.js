import { Box } from "@chakra-ui/react"
import { Branch } from "../Branch"
import { LogInForm } from "../LogInForm"

export const LogInBox = () => {
  const height = ['480px']
  const width = ['100vw', '360px', '360px', '360px']
  const borderRadius = ['8px']

  return(
    <Box
      h={height}
      w={width}
      boxShadow='sm'
      borderRadius={borderRadius}
      padding='10px'
    >
      <Branch />
      <LogInForm />
    </Box>
  )
}
