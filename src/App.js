import { BrowserRouter } from 'react-router-dom'
import { Routes } from './config/routes'
import { Box } from "@chakra-ui/react"

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
