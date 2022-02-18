import { Box, Paper, Text } from "@mantine/core"

const ScorecardSection = () => {

    const wrapper = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem'
    }

    const test = ['Total Return', 'Unrealized Return', 'Amount Invested']


  return (
    <Box sx={wrapper}>
        {
            test.map( (item, idx) => (
                <Paper
                    key={idx}
                    shadow='sm'
                    radius='md'
                    withBorder
                    padding='md'
                    sx={{
                        minHeight: '125px'
                    }}
                >
                    <Text>{item}</Text>
                </Paper>
            ))
        }
    </Box>
  )
}

export default ScorecardSection