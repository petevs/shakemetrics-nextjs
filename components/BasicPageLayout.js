import { Title, Paper } from '@mantine/core'
import DashboardShell from './DashboardShell'


const BasicPageLayout = ({ title, firstSection, children}) => {


    return (

        <DashboardShell>
        <Title color='dimmed' size='xl' weight={700} mb='xl'>
          {title}
        </Title>
        <Paper
            shadow='sm'
            radius='md'
            withBorder
            padding='xl'
        >
            {firstSection}
        </Paper>
        {children}
        </DashboardShell>

    )
}

export default BasicPageLayout