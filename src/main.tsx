import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { CounterProvider } from './context/CounterContext'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>
)
