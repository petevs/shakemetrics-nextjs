import { Box } from '@mantine/core'

const DashboardHeader = () => {

    const style = (theme) => ({
        color: theme.colors.blue,
        fontWeight: 700,
        width: '100%',
        '@media (max-width: 768px)': {
            textAlign: 'center'
        }
    })

    return (
        <Box sx={style}>
            Shake Metrics
        </Box>
    )
}

export default DashboardHeader