export const defaultChartOptions = {
    chart: {
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
        labels: {
            formatter: value => formatYAxis(value)
        }
    }
}