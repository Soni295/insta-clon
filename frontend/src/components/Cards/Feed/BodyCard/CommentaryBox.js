import { Box, Text, HStack } from "@chakra-ui/react"
import { useGenerateKey } from "../../../../hooks/useGenerateKey"
import { useOnOff } from "../../../../hooks/useOnOff"

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

const Commentary = ({user, commentary, hover}) => {
  const { name } = user
  return(
    <HStack>
      <Text
        fontWeight='800'
        _hover={hover}
      >{name}</Text>
      <Text>{commentary}</Text>
    </HStack>
  )
}

export const ShowMoreCommentaries = ({countCommentaries, show, turnShow, hover}) => {

  if(countCommentaries < 3  || !show) return <></>

  return(
    <Text
      color='blackAlpha.500'
      _hover={hover}
      onClick={turnShow}
    >
      Ver los {countCommentaries} commentarios
    </Text>
  )
}


export const CommentaryBox = ({commentariesTemp=data}) => { ///  >---------------------- Cambiar pa
  const commentaries = useGenerateKey(commentariesTemp)
  const [show, turnShow] = useOnOff()
  const data = show ? lastXItems(commentaries, 2): commentariesTemp

  const hover = {
    color:'blackAlpha.700',
    transition: '500ms ease',
    cursor: 'pointer'
  }

  return(
    <Box
      fontSize='0.75em'
    >
      <ShowMoreCommentaries
        countCommentaries={commentaries.length}
        show={show}
        turnShow={turnShow}
        hover={hover}
      />
      {data.map(data =>
        <Commentary hover={hover} {...data}/>
      )}
    </Box>
  )
}
