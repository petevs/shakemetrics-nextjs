import { Paper, Text } from "@mantine/core"

const NoActivity = () => {
  return (
    <Paper  sx={(theme) => ({
        display: 'grid',
        alignContent: 'center',
        justifyContent: 'center',
        minHeight: '400px', 
        backgroundColor: theme.colors.gray[0]})}>
        <Text size='md' color='dimmed'>No activity for this period</Text>
    </Paper>
  )
}

export default NoActivity