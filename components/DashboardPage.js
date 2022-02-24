import { Container } from '@mantine/core'

const DashboardPage = ({ children }) => {

  return (
    <Container mt='md' size='xl' sx={{minHeight: 'calc(100vh - 150px)'}}>
      {children}
    </Container>

  )
}

export default DashboardPage