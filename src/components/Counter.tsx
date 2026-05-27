import React from 'react'
import useCounter from '../hooks/useCounter'
import { Button, Box, Text, useToast, HStack, VStack, Badge } from '@chakra-ui/react'
import CustomToast from './CustomToast'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
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
      duration: 2500,
      isClosable: true,
      position: 'top-right',
      render: ({ onClose }) => <CustomToast value="reset" onClose={onClose} />
    })
  }

  return (
    <MotionBox
      w="full"
      p={8}
      borderRadius="3xl"
      bg="rgba(15, 23, 32, 0.8)"
      border="1px solid rgba(255,255,255,0.08)"
      boxShadow="0 40px 120px rgba(0,0,0,0.25)"
      backdropFilter="blur(32px)"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <HStack justify="space-between" mb={6} align="flex-start">
        <VStack align="flex-start" spacing={2}>
          <Badge colorScheme="teal" rounded="full" px={3} py={1} fontSize="0.75rem" letterSpacing="widest">
            live counter
          </Badge>
          <Text color="gray.300" fontSize="sm" maxW="lg">
            Press +1 to increment the shared counter. The value is stored locally and restored after refresh.
          </Text>
        </VStack>
        <Box
          w={14}
          h={14}
          bgGradient="linear(to-br, teal.300, cyan.400)"
          borderRadius="full"
          boxShadow="0 0 30px rgba(56, 189, 248, 0.28)"
        />
      </HStack>

      <VStack spacing={6} align="center">
        <MotionText
          fontSize={{ base: '6xl', md: '8xl' }}
          fontWeight={800}
          bgGradient="linear(to-r, cyan.300, teal.200)"
          bgClip="text"
          aria-live="polite"
          key={count}
          initial={{ scale: 0.88, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        >
          {count}
        </MotionText>

        <HStack spacing={4} w="full" justify="center">
          <Button
            onClick={handleClick}
            colorScheme="cyan"
            size="lg"
            px={10}
            py={7}
            borderRadius="2xl"
            boxShadow="0 16px 40px rgba(56, 189, 248, 0.25)"
            _hover={{ transform: 'translateY(-2px)', boxShadow: '0 20px 60px rgba(56, 189, 248, 0.35)' }}
            _focus={{ boxShadow: '0 0 0 4px rgba(56, 189, 248, 0.18)' }}
          >
            +1
          </Button>

          <Button
            onClick={handleReset}
            colorScheme="whiteAlpha"
            variant="solid"
            size="lg"
            px={10}
            py={7}
            borderRadius="2xl"
            bg="rgba(255,255,255,0.08)"
            border="1px solid rgba(255,255,255,0.12)"
            _hover={{ bg: 'rgba(255,255,255,0.14)', transform: 'translateY(-2px)' }}
            _focus={{ boxShadow: '0 0 0 4px rgba(255,255,255,0.12)' }}
          >
            Reset
          </Button>
        </HStack>
      </VStack>
    </MotionBox>
  )
}
