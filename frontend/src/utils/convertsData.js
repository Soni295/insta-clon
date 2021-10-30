import { generateKey } from './generateKey'

export const setPostsArray = data => (
  data.map(v => ({
    user: {
      name: v.user_name,
      img: 'https://bit.ly/sage-adebayo'
    },
    desc: v.description,
    img: 'https://bit.ly/sage-adebayo',
    key: generateKey()
  }))
)
