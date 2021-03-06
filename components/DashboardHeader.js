import { Box, ThemeIcon, Text, MediaQuery } from '@mantine/core'
import Link from 'next/link'
import { IoAnalytics } from 'react-icons/io5'
import ColorModeToggle from './ColorModeToggle'
import PriceTicker from './PriceTicker'

const DashboardHeader = ({noNav}) => {

    const wrapper = (theme) => ({
        display: 'grid',
        gridTemplateColumns: noNav ? 'auto 1fr auto' : '200px 1fr  auto',
        gap: '2rem',
        alignItems: 'center',
        width: '100%',
        maxWidth: noNav ? '1080px' : '100%',
        justifyItems: 'start',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            justifyItems: 'center',
            gridTemplateColumns: noNav ? 'auto 1fr auto' : '1fr auto auto'
        }
    })

    const logo = (theme) => ({
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: 'auto auto',
        fontWeight: 700,
        ':hover': {
            cursor: 'pointer',
            color: theme.colors.blue[6]
        }
    })

    const tickerStyles = (theme) => ({
        [`@media (max-width:${theme.breakpoints.sm}px)`]:  {
            display: 'none'
        }
    })

    return (
        <Box sx={wrapper}>
            <Link href='/' passHref>
                <Box sx={logo}>
                    <ThemeIcon variant='light' size='sm'>
                        <IoAnalytics />
                    </ThemeIcon>
                    <Text ml='xs' size='xl'>Shake Metrics</Text>
                </Box>
            </Link>
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <PriceTicker sx={tickerStyles} />
            </MediaQuery>
            <ColorModeToggle />
        </Box>
    )
}

export default DashboardHeader