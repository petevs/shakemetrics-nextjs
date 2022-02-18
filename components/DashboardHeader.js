import { Box, ThemeIcon, Text, useMantineColorScheme } from '@mantine/core'
import { IoAnalytics } from 'react-icons/io5'
import ColorModeToggle from './ColorModeToggle'

const DashboardHeader = () => {

    const wrapper = (theme) => ({
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        width: '100%',
        justifyItems: 'start',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            justifyItems: 'center'
        }
    })

    const logo = (theme) => ({
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: 'auto auto',
        fontWeight: 700,
    })

    return (
        <Box sx={wrapper}>
            <Box sx={logo}>
                <ThemeIcon variant='light' size='sm'>
                    <IoAnalytics />
                </ThemeIcon>
                <Text ml='xs' size='xl'>Shake Metrics</Text>
            </Box>
            <ColorModeToggle />
        </Box>
    )
}

export default DashboardHeader