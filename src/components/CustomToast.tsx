import React from 'react'
import { Box, HStack, Text, IconButton } from '@chakra-ui/react'
import { CheckCircleIcon, CloseIcon } from '@chakra-ui/icons'

type Props = {
  value: number | string
  onClose?: () => void
}

export default function CustomToast({ value, onClose }: Props) {
  return (
    <Box
      role="status"
      aria-live="polite"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '12px 20px 12px 16px',
        gap: '8px',
        background:
          'radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(96, 234, 255, 0.14) 0%, rgba(96, 234, 255, 0.03) 100%), rgba(35, 37, 44, 0.96)',
        boxShadow:
          '0px 0px 0px 1px rgba(40, 41, 50, 0.04), 0px 2px 8px -1px rgba(40, 41, 50, 0.08), 0px 8px 30px rgba(40, 41, 50, 0.18)',
        borderRadius: 12,
        border: '1px solid',
        borderImageSource:
          'linear-gradient(0deg, #6F7076, #6F7076), radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(96, 234, 255, 0.45) 0%, rgba(96, 234, 255, 0.08) 100%)'
      }}
    >
      <HStack spacing={3} align="center">
        <CheckCircleIcon boxSize={6} color="#60E9FF" />

        <Text
          fontFamily="Inter, system-ui, Arial"
          fontStyle="normal"
          fontWeight={500}
          fontSize="14px"
          lineHeight="16px"
          color="#FFFFFF"
        >
          {value}
        </Text>
      </HStack>

      <Box ml="auto">
        <IconButton
          aria-label="close"
          size="sm"
          icon={<CloseIcon />}
          onClick={onClose}
          variant="ghost"
          color="gray.300"
          _hover={{ bg: 'rgba(255,255,255,0.08)' }}
        />
      </Box>
    </Box>
  )
}
