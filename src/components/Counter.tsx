import React from 'react'
import useCounter from '../hooks/useCounter'

export default function Counter() {
  const { count, increment } = useCounter()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <div
        style={{
          fontSize: 36,
          fontWeight: 600,
          color: '#FFFFFF',
          minWidth: 80,
          textAlign: 'center'
        }}
        aria-live="polite"
      >
        {count}
      </div>

      <button
        onClick={increment}
        style={{
          appearance: 'none',
          border: 'none',
          background: '#2B6CB0',
          color: 'white',
          padding: '10px 16px',
          borderRadius: 8,
          fontSize: 16,
          cursor: 'pointer'
        }}
      >
        +1
      </button>
    </div>
  )
}
