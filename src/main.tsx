import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { CounterProvider } from './context/CounterContext'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif'
  },
  styles: {
    global: {
      body: {
        bg: '#050816',
        color: '#E2E8F0'
      }
    }
  }
})

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CounterProvider>
        <App />
      </CounterProvider>
    </ChakraProvider>
  </React.StrictMode>
)
