import { Paper, Title, Text, Group, ThemeIcon, useMantineColorScheme} from '@mantine/core';
import dynamic from 'next/dynamic';
import { IoArrowUp } from 'react-icons/io5'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DashboardChart = ({ categories, series, title, yAxisType, lastEntry}) => {


    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const options = {
        theme: {
            mode: dark ? 'dark' : 'light',
            palette: 'pallette2'
        },
        dataLabels: {
            enabled: false,
        },
        chart: {
            background: 'transaparent',
            animations: {
                enabled: false,
            },
            toolbar: {
                show: false
            }
        },
        xaxis: {
            type: 'datetime',
            categories: categories,
        },
        yaxis: {
            // labels: {
            //     formatter: value => formatYAxis(value)
            // }
        }
    }

    return (
        <Paper
            shadow='sm'
            radius='md'
            withBorder
            padding='xl'
        >
            <Text uppercase>Ending BTC Balance</Text>
            <Title size='lg'>{lastEntry.wallets.BTC}</Title>
            <Group sx={{gap: '5px'}} mb='md'>
                <ThemeIcon radius='xl' variant='light' color='green'>
                    <IoArrowUp />
                </ThemeIcon>
                <Text weight={700} color='green'>14.3%</Text>
                <Text color='dimmed' size='sm'>in selected period</Text>
            </Group>
            <Chart
                series={series}
                options={options}
                type='area'
                width='100%'
                height='400px'
            />
        </Paper>
    )
}

export default DashboardChart