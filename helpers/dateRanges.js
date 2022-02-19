import dayjs from "dayjs";


const getDateRange = ( startSubtract, startUnits, endSubtract = 0, endUnits = 'days' ) => {
    const startDate = dayjs().subtract(startSubtract, startUnits).toDate()
    const endDate = dayjs().subtract(endSubtract, endUnits).toDate()

    return [startDate, endDate]
}


const yesterday = getDateRange(1, 'day')
const lastSevenDays = getDateRange(7, 'days')
const last30Days = getDateRange(30, 'days')

const lastMonth = () => {
    const lastMonth = dayjs().month()
    const thisYear = dayjs().year()
    let startDate = `${lastMonth}-01-${thisYear}`
    const daysInMonth = dayjs(startDate).daysInMonth()
    startDate = dayjs(startDate).toDate()
    const endDate = dayjs(`${lastMonth}-${daysInMonth}-${thisYear}`).toDate()
    return [startDate, endDate]
}

const thisMonth = () => {
    const thisMonth = dayjs().month() + 1
    const thisYear = dayjs().year()
    
    return [dayjs(`${thisMonth}-01-${thisYear}`).toDate(), dayjs().toDate()]
}

const lastYear = () => {
    const pastYear = dayjs().year() - 1
    const start = dayjs(`01-01-${pastYear}`).toDate()
    const end = dayjs(`12-31-${dayjs().year()}`).toDate()
    return [start, end]
}

const thisYear = () => {
    const start = dayjs(`01-01-${dayjs().year()}`).toDate()
    return [start, dayjs().toDate()]
}


const last3Months = getDateRange(3, 'months')
const last6Months = getDateRange(6, 'months')
const last12Months = getDateRange(12, 'months')
const allTime = [dayjs('2016-01-01').toDate(), dayjs().toDate()]


export const dateRanges = {
    "Yesterday": yesterday,
    "Last 7 Days": lastSevenDays,
    "Last 30 Days": last30Days,
    "This Month": thisMonth(),
    "Last Month": lastMonth(),
    "Last 3 Months": last3Months,
    "Last 6 Months": last6Months,
    "Last 12 Months": last12Months,
    "This Year": thisYear(),
    "Last Year": lastYear(),
    "All Time": allTime
}

const getDateList = () => {
    const results = []

    for (const key in dateRanges) {
        results.push(key)
    }

    return results
}

export const dateRangeList = getDateList()


export const convertDateToFriendly = ( date ) => {
    return dayjs(date).format('YYYY-MM-DD')
}