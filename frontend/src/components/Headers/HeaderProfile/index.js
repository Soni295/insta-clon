import { Box } from "@chakra-ui/react"

import { ProfileImagen } from "../../ProfileImagen"
import { UserName } from "./UserName"
import { DescProfile } from "./DescProfile"

const data = {
  name: 'Armando Estaban Quito',
  posts: 59,
  img: 'https://bit.ly/sage-adebayo',
  followers: 100,
  following: 110,
}

export const HeaderProfile = ({info=data}) => {
  return (
    <Box
      w='100%'
      bg='red.200'
      textAlign='center'
      fontSize={['12px','12px', '14px', '1rem']}
      display='grid'
      justifyItems='center'
      pt='20px'
    >
      <ProfileImagen
        img={info.img}
        size='big'
      />
      <UserName>
        {info.name}
      </UserName>
      <Box
        m='auto'
        w={['100%', '90%', '75%', '55%']}
        display='grid'
        gridTemplateColumns={['1fr', '1fr 1fr 1fr']}
        py={['10px', null, '20px']}
      >
        <DescProfile
          count={info.posts}
          text='Posts'
        />
        <DescProfile
          count={info.followers}
          text='Followers'
        />
        <DescProfile
          count={info.following}
          text='Following'
        />
      </Box>
    </Box>
  )
}
