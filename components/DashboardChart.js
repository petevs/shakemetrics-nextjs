import { Paper, Title, Text, Group, ThemeIcon, useMantineColorScheme, Box, Input } from '@mantine/core';
import dynamic from 'next/dynamic';
import { IoArrowUp, IoArrowDown } from 'react-icons/io5'
import { toDollars } from '../helpers/currencyFormatters';
import CurrencyToggle from './CurrencyToggle';
import { useMediaQuery } from '@mantine/hooks';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DashboardChart = ({ categories, series, title, yAxisType, lastEntry, change, val}) => {


    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const isMobile = useMediaQuery('(max-width: 755px)');

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
            show: !isMobile,
            labels: {
                formatter: value => Math.round(value * 10000000) / 10000000
            }
        }
    }

    const headerStyle = (theme) => ({
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        borderBottom: `1px solid ${theme.colors.dark[0]}`,
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            gridTemplateColumns: '1fr',
        },
        textAlign: isMobile ? 'center' : 'left'
    })

    const chartSelectStyle = (theme) => ({
        justifySelf: 'end',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            justifySelf: 'stretch',
            marginBottom: `${theme.spacing.md}px`
        }
    })

    return (
        <Paper
            shadow='sm'
            radius='md'
            withBorder
            padding='xl'
        >
            <Box sx={headerStyle} mb='xl'>
                <CurrencyToggle />
                <Input
                    sx={chartSelectStyle} 
                    value='Unrealized Gain'
                />
            </Box>
            <Text uppercase sx={{textAlign: isMobile ? 'center' : 'left'}}>Unrealized Gain</Text>
            <Title sx={{textAlign: isMobile ? 'center' : 'left'}} size='lg'>${toDollars(val)}</Title>
            <Group direction={isMobile ? 'column' : 'row'} position={isMobile ? 'center' : 'left'} sx={{gap: '5px', paddingBottom: '2rem'}}>
                <Group sx={{gap: '5px'}}>
                    <ThemeIcon radius='xl' variant='light' color={change.change > 0 ? 'green' : 'red'}>
                        { change.change > 0 ? <IoArrowUp /> : <IoArrowDown /> }
                    </ThemeIcon>
                    <Text 
                        weight={700} 
                        color={change.change > 0 ? 'green' : 'red'}
                    >
                        {toDollars(change.change)} {change.percent}
                        </Text>
                </Group>
                <Text color='dimmed' size='sm'>in selected period</Text>
            </Group>
            <Chart
                style={{margin: isMobile ? '-2.25rem': 'inherit'}}
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