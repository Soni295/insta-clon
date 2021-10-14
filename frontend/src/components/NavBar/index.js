import { Grid } from "@chakra-ui/react"
import { useSelector } from 'react-redux';
import { CreatePostBtn } from '../Btns/CreatePostBtn'

export const NavBar = () => {
  const { user } = useSelector(state => state)
  if(!user.name) return null

  const height = [20, 30, 40, 50]

  return (
    <Grid
      h={height}
      bg='gray.100'
      position='sticky'
      top='0'
      mb='100px'
      alignItems='center'
      justifyItems='center'
    >
      <CreatePostBtn />
    </Grid>
  )
}
