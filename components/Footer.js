import { Text, Group, Box } from '@mantine/core'
import Link from 'next/link'
import { useContext } from 'react'
import { GlobalContext } from '../state/GlobalContext'

const Footer = () => {

    const { state } = useContext(GlobalContext)
    const { demo } = state

    const style = (theme) => ({
        paddingBottom: demo ? '100px' : '1rem',
      '& a': {
          color: 'inherit', 
          textDecoration: 'none'}
    })

    return (
        <Box component='footer'>
            <Text 
                color='dimmed' 
                sx={style}
                size='sm'
            >
                <Group 
                    position='center' 
                    mt='md'
                >
                <>© 2022 Shake Metrics</>
                <Link href='/privacy'>Privacy</Link>
                <Link href='/terms'>Terms</Link>
                <Link href='/contact'>Contact</Link>
                </Group>
            </Text>
        </Box>
    )
}

export default Footer