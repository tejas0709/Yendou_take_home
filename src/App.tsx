import React from 'react'
import { Box, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Counter from './components/Counter'

const MotionHeading = motion(Heading)

export default function App() {
  return (
    <Box
      minH="100vh"
      position="relative"
      overflow="hidden"
      bg="radial-gradient(circle at 20% 20%, rgba(72, 187, 120, 0.18), transparent 24%), radial-gradient(circle at 80% 10%, rgba(56, 189, 248, 0.14), transparent 20%), radial-gradient(circle at 50% 80%, rgba(139, 92, 246, 0.12), transparent 22%), #050816"
    >
      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(180deg, rgba(255,255,255,0.04), transparent 30%)"
        pointerEvents="none"
      />

      <Container maxW="container.sm" py={16} zIndex={1} position="relative">
        <Flex direction="column" align="center" gap={10}>
          <VStack spacing={4} textAlign="center">
            <MotionHeading
              as="h1"
              size="2xl"
              letterSpacing="tighter"
              color="white"
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Yendou — Counter Studio
            </MotionHeading>
            <Text color="gray.300" maxW="lg" fontSize="lg">
              A futuristic React experience with a global counter, polished notifications, and persistent state.
            </Text>
          </VStack>

          <Counter />
        </Flex>
      </Container>
    </Box>
  )
}
