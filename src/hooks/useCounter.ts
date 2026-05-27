import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

export function useCounter() {
  const ctx = useContext(CounterContext)
  if (!ctx) throw new Error('useCounter must be used within a CounterProvider')
  const { count, increment } = ctx
  return { count, increment }
}

export default useCounter
