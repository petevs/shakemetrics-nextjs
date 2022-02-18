import { Box, ThemeIcon, Text, Group } from '@mantine/core'
import { IoAnalytics } from 'react-icons/io5'

const DashboardHeader = () => {

    const wrapper = (theme) => ({
        display: 'grid',
        gridTemplateColumns: '1fr',
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
        color: theme.colors.blue,
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
        </Box>
    )
}

export default DashboardHeader