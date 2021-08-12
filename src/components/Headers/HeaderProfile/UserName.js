import { Text } from "@chakra-ui/react"

export const UserName = ({children}) => (
  <Text
    as='h1'
    fontSize='2em'
    mt='20px'
    mb={['5px', '20px']}
  >
    {children}
  </Text>
)
