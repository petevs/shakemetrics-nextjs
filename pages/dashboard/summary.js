import { Box, Paper, Text } from '@mantine/core'
import DashboardShell from '../../components/DashboardShell'
import DbSelectionSection from '../../components/DbSelectionSection'
import PageHeader from '../../components/PageHeader'

const SummaryPage = () => {
    return(
        <>
            <DashboardShell>
                <PageHeader title='Summary' />
                <Paper
                    shadow='sm'
                    radius='md'
                    withBorder
                    padding='xl'
                >
                    <DbSelectionSection>
                        <Text size='lg' mb='sm'>Activity</Text>
                    </DbSelectionSection>
                    <Text size='sm' transform='uppercase'>
                        Purchases
                    </Text>
                    <Text size='sm' ml='sm'>
                        Bitcoin
                    </Text>
                    <Text size='sm' ml='lg'>
                        Quantity
                    </Text>
                    <Text size='sm' ml='lg'>
                        Amount Invested
                    </Text>
                    <Text size='sm' ml='sm'>
                        Ethereum
                    </Text>
                </Paper>
            </DashboardShell>
        </>
    )
}

export default SummaryPage