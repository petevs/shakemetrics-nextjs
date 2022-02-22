import { Paper, Title, Text, Group, ThemeIcon, useMantineColorScheme, Box, Input } from '@mantine/core';
import dynamic from 'next/dynamic';
import { IoArrowUp, IoArrowDown } from 'react-icons/io5'
import { toDollars } from '../helpers/currencyFormatters';
import CurrencyToggle from './CurrencyToggle';
import { useMediaQuery } from '@mantine/hooks';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DbChart = ({ categories, series, title, yAxisType, lastEntry, change, val}) => {


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
        <>
            <Chart
                style={{margin: isMobile ? '-2.25rem': 'inherit'}}
                series={series}
                options={options}
                type='area'
                width='100%'
                height='400px'
            />
        </>
    )
}

export default DbChart