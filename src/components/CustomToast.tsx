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
        background: 'radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116,200,152,0.15) 0%, rgba(116,200,152,0.03) 100%), #46474F',
        boxShadow:
          '0px 0px 0px 1px rgba(40, 41, 50, 0.04), 0px 2px 2px -1px rgba(40, 41, 50, 0.04), 0px 4px 4px -2px rgba(40, 41, 50, 0.04), 0px 8px 8px -4px rgba(40, 41, 50, 0.06), 0px 16px 32px rgba(40, 41, 50, 0.06)',
        borderRadius: 8,
        border: '1px solid',
        borderImageSource:
          'linear-gradient(0deg, #6F7076, #6F7076), radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116,200,152,0.65) 0%, rgba(116,200,152,0.1) 100%)'
      }}
    >
      <HStack spacing={3} align="center">
        <CheckCircleIcon boxSize={6} color="#74C898" />

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
        <IconButton aria-label="close" size="sm" icon={<CloseIcon />} onClick={onClose} variant="ghost" />
      </Box>
    </Box>
  )
}
