import React, { createContext, useState, useEffect } from 'react'

export type CounterContextValue = {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
  increment: () => void
  reset: () => void
}

export const CounterContext = createContext<CounterContextValue | undefined>(undefined)

const STORAGE_KEY = 'yendou_counter'

export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState<number>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? Number.parseInt(raw, 10) || 0 : 0
    } catch (e) {
      return 0
    }
  })

  const increment = () => setCount((c) => c + 1)
  const reset = () => setCount(0)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(count))
    } catch (e) {
      // ignore storage errors
    }
  }, [count])

  return (
    <CounterContext.Provider value={{ count, setCount, increment, reset }}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider
