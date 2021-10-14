import { main } from './Path'

export const fetchLogIn = ({user, password}) => (
  main.post(process.env.REACT_APP_API_LOGIN, {user, password})
)
