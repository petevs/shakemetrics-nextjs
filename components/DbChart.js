import { useMantineColorScheme } from '@mantine/core';
import dynamic from 'next/dynamic';
import { useMediaQuery } from '@mantine/hooks';
import dayjs from 'dayjs';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DbChart = ({ categories, series }) => {



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
                formatter: value => Math.round(value * 10000000) / 10000000
            }
        },
        grid: {
            show: false
        }
    }

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