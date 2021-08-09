import { useState } from "react"
import { Box, VStack , Text } from "@chakra-ui/react"

const PublicationActions = () => {
  return(
    <Text>
      Like Comment Share
    </Text>
  )
}


const Description = ({name, desc}) => {
  const [truncatedDesc, setTruncatedDesc] = useState(true)
  const readMore = () => setTruncatedDesc(!truncatedDesc)

  return(
    <Box display='block'>
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


export const BodyCard = ({name, desc}) => {
  return (
    <Box>
      <VStack
        my={2}
        mx={3}
        spacing={1}
        fontSize='1.5rem'
        align="stretch"
      >
        <PublicationActions />
        <Text
          fontSize='.75em'
          role='button'
          color='main.text'
          _hover={{
            color: '.500',
            transition: '500ms '
          }}
        >
          30000 views
        </Text>
        <Description
          name={name}
          desc={desc}
        />
        <Box>
          3
        </Box>
      </VStack>
    </Box>
  )
}
