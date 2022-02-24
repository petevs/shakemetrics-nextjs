import { useEffect, useState } from 'react'
import { Box, useMantineColorScheme } from '@mantine/core';
import dynamic from 'next/dynamic';
import { useMediaQuery } from '@mantine/hooks';
import dayjs from 'dayjs';
import { toBitcoin, toDollars } from '../helpers/currencyFormatters'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DbChart = ({ categories, series, chartFormat }) => {

    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {

        setRefreshing(true)
    
        const timeout = setTimeout(() => {
          setRefreshing(false)
        }, 1);
    
        return () => clearTimeout(timeout)
    
      }, [chartFormat])

    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const isMobile = useMediaQuery('(max-width: 755px)');


    const formatYAxis = (val) => {
        if(chartFormat === 'BTC'){return toBitcoin(val).text}
        if(chartFormat === 'CAD'){return toDollars(val).text}

        return Math.round(val)
    }

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
            },
            events: {
                // updated: function(chartContext, config) {
                //     console.log(chartContext)
                //   }
            },
        },
        xaxis: {
            type: 'datetime',
            categories: categories,
        },
        yaxis: {
            show: !isMobile,
            labels: {
                formatter: value => formatYAxis(value)
            }
        },
        grid: {
            show: false
        }
    }

    return (
        <>
            {
                refreshing 
                ? <Box sx={{height: '400px'}}></Box>
                : <Chart
                    style={{margin: isMobile ? '-2.25rem': 'inherit'}}
                    series={series}
                    options={options}
                    type='area'
                    width='100%'
                    height='400px'
                />
            }
        </>
    )
}

export default DbChart