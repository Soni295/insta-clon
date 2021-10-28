import { useEffect } from 'react'
import { connect } from 'react-redux';
import { VStack } from "@chakra-ui/react"

import { Card } from "../Cards/Feed"
import { getPostsForMain } from '../../redux/Posts/reducers';

const mapStateToProps = state => {
  return {
    token: state.user.token,
    posts: state.posts
  }
}

export const Publications = connect(mapStateToProps, getPostsForMain)
  (({token, posts, getPostsForMain})=> {

  useEffect(() => { getPostsForMain(token) }, [])

  return(
    <VStack>
      {posts.data.map(pub => <Card {...pub} /> )}
    </VStack>
  )
})
