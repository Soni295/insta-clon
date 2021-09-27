import { Box, Text } from "@chakra-ui/react"

import { useOnOff } from "../../../../hooks/useOnOff"

export const Description = ({name, desc}) => {
  const [truncatedDesc, readMore] = useOnOff()

  return(
    <Box
      display='block'
    >
      <Text fontSize='.9em' mr='10px'>
        {name}
      </Text>
      <Text isTruncated={truncatedDesc} fontSize='.775em'>
        {desc}
      </Text>
      <Text
        color='blue.200'
        onClick={readMore}
        fontSize='.775em'
        role='button'
        _hover={{
          color: 'blue.500',
          transition: '500ms '
        }}
      >
        read {truncatedDesc ? 'more': 'less'}
      </Text>
    </Box>
  )
}
