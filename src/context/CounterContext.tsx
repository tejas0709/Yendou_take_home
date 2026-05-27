import React, { createContext, useState } from 'react'

export type CounterContextValue = {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
  increment: () => void
}

export const CounterContext = createContext<CounterContextValue | undefined>(undefined)

export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState<number>(0)
  const increment = () => setCount((c) => c + 1)

  return (
    <CounterContext.Provider value={{ count, setCount, increment }}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider
