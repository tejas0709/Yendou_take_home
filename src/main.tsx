import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { CounterProvider } from './context/CounterContext'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({})

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CounterProvider>
        <App />
      </CounterProvider>
    </ChakraProvider>
  </React.StrictMode>
)
