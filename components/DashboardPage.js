import { Container } from '@mantine/core'

const DashboardPage = ({ children }) => {
  return (
    <Container mt='md' size='xl'>
      {children}
    </Container>

  )
}

export default DashboardPage