import { Box, ThemeIcon, Text, MediaQuery } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
import { IoAnalytics } from 'react-icons/io5'
import ColorModeToggle from './ColorModeToggle'
import PriceTicker from './PriceTicker'

const DashboardHeader = () => {

    const wrapper = (theme) => ({
        display: 'grid',
        gridTemplateColumns: '200px 1fr  auto',
        gap: '2rem',
        alignItems: 'center',
        width: '100%',
        justifyItems: 'start',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            justifyItems: 'center',
            gridTemplateColumns: '1fr auto'
        }
    })

    const logo = (theme) => ({
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: 'auto auto',
        fontWeight: 700,
    })

    const tickerStyles = (theme) => ({
        [`@media (max-width:${theme.breakpoints.sm}px)`]:  {
            display: 'none'
        }
    })

    return (
        <Box sx={wrapper}>
            <Box sx={logo}>
                <ThemeIcon variant='light' size='sm'>
                    <IoAnalytics />
                </ThemeIcon>
                <Text ml='xs' size='xl'>Shake Metrics</Text>
            </Box>
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <PriceTicker sx={tickerStyles} />
            </MediaQuery>
            <ColorModeToggle />
        </Box>
    )
}

export default DashboardHeader