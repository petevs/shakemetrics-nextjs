import { Container, Paper, Text } from '@mantine/core'
import React from 'react'

const DashboardPage = ({ children }) => {
  return (
    <Container mt='md' size='xl'>
      {children}
    </Container>

  )
}

export default DashboardPage