import React from 'react'
import useCounter from '../hooks/useCounter'
import { Button, Box, Text, useToast } from '@chakra-ui/react'

export default function Counter() {
  const { count, increment } = useCounter()
  const toast = useToast()

  const handleClick = () => {
    const next = count + 1
    increment()
    toast({
      title: 'Counter updated',
      description: `${next}`,
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top-right'
    })
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
      <Text fontSize="4xl" fontWeight={600} color="white" minW="80px" textAlign="center" aria-live="polite">
        {count}
      </Text>

      <Button onClick={handleClick} colorScheme="blue" borderRadius="8">
        +1
      </Button>
    </Box>
  )
}
