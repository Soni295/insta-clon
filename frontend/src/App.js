import { BrowserRouter } from 'react-router-dom'
import { Box } from "@chakra-ui/react"

import { Routes } from './config/routes'

export const App = () => (
  <BrowserRouter>
    <Box
      minW='100vw'
      minH='100vh'
      bg='main.1'
    >
      <Routes/>
    </Box>
  </BrowserRouter>
)
