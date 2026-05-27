import React from 'react'
import useCounter from '../hooks/useCounter'
import { Button, Box, Text, useToast, HStack } from '@chakra-ui/react'
import CustomToast from './CustomToast'
import { motion } from 'framer-motion'

const MotionText = motion(Text)

export default function Counter() {
  const { count, increment, reset } = useCounter()
  const toast = useToast()

  const handleClick = () => {
    const next = count + 1
    increment()
    toast({
      duration: 3000,
      isClosable: true,
      position: 'top-right',
      render: ({ onClose }) => <CustomToast value={`+${next}`} onClose={onClose} />
    })
  }

  const handleReset = () => {
    reset()
    toast({
      duration: 2000,
      isClosable: true,
      position: 'top-right',
      render: ({ onClose }) => <CustomToast value={`reset`} onClose={onClose} />
    })
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
      <MotionText
        fontSize="6xl"
        fontWeight={700}
        color="white"
        minW="120px"
        textAlign="center"
        aria-live="polite"
        key={count}
        initial={{ scale: 0.9, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {count}
      </MotionText>

      <HStack spacing={4}>
        <Button
          onClick={handleClick}
          colorScheme="green"
          borderRadius="10"
          size="lg"
          _focus={{ boxShadow: '0 0 0 3px rgba(116,200,152,0.25)' }}
        >
          +1
        </Button>

        <Button
          onClick={handleReset}
          colorScheme="gray"
          variant="outline"
          borderRadius="10"
          size="lg"
          _focus={{ boxShadow: '0 0 0 3px rgba(116,200,152,0.12)' }}
        >
          Reset
        </Button>
      </HStack>
    </Box>
  )
}
