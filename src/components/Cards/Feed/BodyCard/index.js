import { Box, VStack , Text } from "@chakra-ui/react"

import { PublicationActions } from "./PunblicationActions"
import { CommentaryBox } from "./CommentaryBox"
import { Description } from "./Description"

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
        <CommentaryBox />
      </VStack>
    </Box>
  )
}
