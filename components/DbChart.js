import { useEffect, useState } from 'react'
import { Box, Button, useMantineColorScheme } from '@mantine/core';
import dynamic from 'next/dynamic';
import { useMediaQuery } from '@mantine/hooks';
import dayjs from 'dayjs';
import { toBitcoin, toDollars } from '../helpers/currencyFormatters'
import { renderToString } from 'react-dom/server'
import CustomTooltip from './CustomTooltip';
import useGetMockData from '../hooks/useGetMockData'
import { data } from '../lib/dummyData'


const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DbChart = ({ categories, series, chartFormat }) => {

    const [refreshing, setRefreshing] = useState(false)
    const { getMockData } = useGetMockData()

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


    const tooltip = {
        custom: function({series, seriesIndex, dataPointIndex, w}){
            const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex]
            // if(data.y !== chartHoverItem){
            //     setChartHoverItem({...data})
            // }
            return renderToString(<CustomTooltip {...data} formatVal={formatYAxis} />)
        }
    }

    

    // const mobileTooltip = () => {
    //     if(isMobile){
    //         return {
    //             fixed: {
    //                 enabled: true,
    //                 position: 'topRight',
    //                 offsetX: -30,
    //                 offsetY: 30
    //         }
    //         }
    //     }

    //     return {
    //         fixed: {
    //             enabled: false
    //         }
    //     }
    // }


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
                // mouseLeave: function(event, chartContext, config) {
                //     setChartHoverItem(null)
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
        },
        tooltip: {
            ...tooltip,
        }
    }

    return (
        <>
            {
                refreshing 
                ? <Box sx={{height: '400px'}}></Box>
                : <Chart
                    style={{margin: isMobile ? '-2.2rem': 'inherit'}}
                    series={series}
                    options={options}
                    type='area'
                    width='100%'
                    height={isMobile ? '275px' : '400px'}
                />
            }
            <Button onClick={() => getMockData()}>Get Mock Data</Button>
        </>
    )
}

export default DbChart