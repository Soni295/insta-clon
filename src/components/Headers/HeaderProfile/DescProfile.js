import { Text } from "@chakra-ui/react"

export const DescProfile = ({text, count}) => (
  <Text fontSize='1.5em'>{count + ' ' + text}</Text>
)
