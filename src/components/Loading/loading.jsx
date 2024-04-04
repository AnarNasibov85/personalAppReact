import { Box, Spinner } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
  return (
    <Box
    display='flex'
    justifyContent='center'
    p={50}
  >
    <Spinner size='lg' />
  </Box>
  )
}

export default Loading
