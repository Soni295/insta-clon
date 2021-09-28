import axios from 'axios'

const main = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL})

export const fetchLogIn = ({user, password}) => (
  main.post(process.env.REACT_APP_API_LOGIN, {user, password})
)
