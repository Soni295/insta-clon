import { Box, Text, HStack } from "@chakra-ui/react"
import { useGenerateKey } from "../../../../hooks/useGenerateKey"

class Commen {
  constructor(name, user, commentary){
    this.user = {name, user}
    this.commentary = commentary
  }
}
const data = [
  new Commen('Juan Martinez', 'JuanM', 'Hola como estasasddddddd'),
  new Commen('Armando Esteban', 'Armando E', 'foto pal linkedin'),
  new Commen('Juan Martinez', 'JuanM', 'Hola como    estadasdddddddddd'),
  new Commen('Juan Martinez', 'JuanM', 'Hola como estas'),
]

const lastXItems = (arr, count) => arr.slice(-count)

const Commentary = ({user, commentary}) => {
  const { name } = user
  return(
    <HStack>
      <Text>{name}</Text>
      <Text>{commentary}</Text>
    </HStack>
  )
}

export const CommentaryBox = ({commentariesTemp=data}) => { ///  >---------------------- Cambiar pa
  const commentaries = useGenerateKey(commentariesTemp)
  const LastCommetaries = lastXItems(commentaries, 2)
  return(
    <Box
      fontSize='0.75em'
      color='blackAlpha.500'
      _hover={{
        color:'blackAlpha.700',
        transition: '500ms ',
        cursor: 'pointer'
      }}
    >
      Ver los {commentaries.length} commentarios
      {LastCommetaries.map((data, index)=>
        <Commentary
          key={data.user.name + index}
          {...data}
        />
      )}
    </Box>
  )
}
