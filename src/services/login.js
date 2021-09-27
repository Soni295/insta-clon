import axios from 'axios'

import { PATHS } from './PATHS'

const main = axios.create({ baseURL: PATHS.main })

export const fetchLogIn = ({user, password}) => {


  const userExample = {
    user: 'Armando15',
    password: '123456'
  }

  //return main.post()
  return new Promise( res => {

    setTimeout(()=> {
      if(userExample.user === user && userExample.password === password) {
        res('200')
      }
      else {
        res('404')
      }
    }, 1000)

  })
}
