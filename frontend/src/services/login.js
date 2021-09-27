//import axios from 'axios'

//const main = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL})

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
